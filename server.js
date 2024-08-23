const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')
const path = require('path')
const { error } = require('console')

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
  }

  users.push(newUser)
  dbData.users = users

  fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2))

  res.status(201).json(newUser)
})

// Route to login a user
server.post('/login', (req, res, next) => {
  const { email, password } = req.body

  // Read the db file and parse it to JSON from db.json
  const dbFilePath = path.join(__dirname, 'db.json')
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))

  const user = dbData.users.find((user) => user.email === email)

  // Check if email exists
  if (!user) {
    return next({
      statusCode: 404,
      fields: [{ field: 'email', message: 'Email không tồn tại' }],
    })
  }
  // Check if password is correct
  if (password !== user.password) {
    return next({
      statusCode: 401,
      fields: [
        { field: 'password', message: 'Email hoặc mật khẩu không đúng' },
      ],
    })
  }

  if (!user) {
    return res.status(401).json({ error: 'Đăng nhập không thành công' })
  }

  res.status(200).json(user)
})

// route to reset password
server.patch('/reset-password', (req, res, next) => {
  const { email, password, confirmPassword } = req.body

  // Read the db file and parse it to JSON from db.json
  const dbFilePath = path.join(__dirname, 'db.json')
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'))

  const user = dbData.users.find((user) => user.email === email)

  // Check if email exists
  if (!user) {
    return next({
      statusCode: 404,
      fields: [{ field: 'email', message: 'Email không tồn tại' }],
    })
  }

  if (password.length < 6 || confirmPassword.length < 6) {
    return next({
      statusCode: 400,
      fields: [
        { field: 'password', message: 'Mật khẩu phải có ít nhất 6 kí tự' },
      ],
    })
  }

  // Check if password is correct
  if (password !== confirmPassword) {
    return next({
      statusCode: 401,
      fields: [{ field: 'password', message: 'Mật khẩu không khớp' }],
    })
  }

  // Update the password vs the confirmPassword
  user.password = password
  user.confirmPassword = confirmPassword

  // Write the updated data back to the db.json file
  fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2))

  res.status(200).json(user)
})

// Middleware xử lý lỗi
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
