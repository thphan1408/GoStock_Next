import ResetPasswordForm from './reset-password-form'

const ResetPasswordPage = () => {
  return (
    <>
      <section id="Reset-Password">
        <h1 className="text-2xl font-semibold text-center">Reset password</h1>
        <div className="flex justify-center">
          <ResetPasswordForm />
        </div>
      </section>
    </>
  )
}

export default ResetPasswordPage
