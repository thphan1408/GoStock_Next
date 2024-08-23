import LoginForm from './login-form'

const LoginPage = () => {
  return (
    <section id="login">
      <h1 className="text-2xl font-semibold text-center">Log in</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginPage
