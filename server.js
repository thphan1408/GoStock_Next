const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')
const path = require('path')

const port = process.env.NEXT_PUBLIC_PORT || 3001

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  console.log('Request received')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS, PATCH',
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

// Route to register a new user
server.post('/register', (req, res) => {
  const { yourName, email, password, confirmPassword } = req.body

  if (!yourName || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' })
  }

  const dbFilePath = path.join(__dirname, 'db.json')
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))

  const users = dbData.users || []
  const newUser = {
    id: users.length + 1,
    yourName,
    email,
    password,
    confirmPassword,
    accessToken: Math.random().toString(36).substring(2),
    refreshToken: Math.random().toString(36).substring(2),
  }

  users.push(newUser)
  dbData.users = users

  fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2))

  res.status(201).json(newUser)
})

// Route to login a user
server.post('/login', (req, res, next) => {
  const { email, password } = req.body

  const dbFilePath = path.join(__dirname, 'db.json')
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))

  const user = dbData.users.find((user) => user.email === email)

  if (!user) {
    return next({
      statusCode: 404,
      fields: [{ field: 'email', message: 'Email không tồn tại' }],
    })
  }

  if (password !== user.password) {
    return next({
      statusCode: 401,
      fields: [
        { field: 'password', message: 'Email hoặc mật khẩu không đúng' },
      ],
    })
  }

  res.status(200).json(user)
})

// Route to forgot password
server.post('/forgot-password', (req, res, next) => {
  const { email } = req.body

  const dbFilePath = path.join(__dirname, 'db.json')
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))

  const user = dbData.users.find((user) => user.email === email)

  if (!user) {
    return next({
      statusCode: 404,
      fields: [{ field: 'email', message: 'Email không tồn tại' }],
    })
  }

  const token = Math.random().toString(36).substring(2)
  user.resetToken = token

  fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2))

  res.status(200).json({ message: 'Token sent to email', token })
})

// Route to reset password
server.post('/reset-password', (req, res, next) => {
  const { newPassword, confirmPassword } = req.body
  console.log('confirmPassword:', confirmPassword)
  console.log('newPassword:', newPassword)

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' })
  }

  const dbFilePath = path.join(__dirname, 'db.json')
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))

  const user = dbData.users.find((user) => user.resetToken === token)

  if (!user) {
    return next({
      statusCode: 404,
      fields: [{ field: 'token', message: 'Token không hợp lệ' }],
    })
  }

  user.password = newPassword
  delete user.resetToken

  fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2))

  res.status(200).json({ message: 'Password reset successful' })
})

// Middleware to handle errors
server.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const errorResponse = {
    errors: {
      message: err.message || 'Internal Server Error',
      fields: err.fields || [],
    },
  }
  res.status(statusCode).json(errorResponse)
})

server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})
