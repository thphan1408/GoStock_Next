import ResetPasswordForm from './reset-password-form'

const ResetPasswordPage = () => {
  return (
    <>
      <section id="Reset-Password" className="md:min-h-auto h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-4 md:p-8">
          <div className="space-y-3 max-w-md w-full">
            <h1 className="text-3xl font-semibold text-center md:text-left">
              Reset Password
            </h1>
            <ResetPasswordForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ResetPasswordPage
