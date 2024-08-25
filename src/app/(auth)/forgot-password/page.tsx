import ForgotPasswordForm from './forgot-password-form'

const ForgotPasswordPage = () => {
  return (
    <>
      <section id="Forgot-Password">
        <h1 className="text-2xl font-semibold text-center">Reset password</h1>
        <div className="flex justify-center">
          <ForgotPasswordForm />
        </div>
      </section>
    </>
  )
}

export default ForgotPasswordPage
