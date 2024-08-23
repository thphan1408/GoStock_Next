import RegisterForm from './register-form'

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-center">Sign up</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </>
  )
}

export default RegisterPage
