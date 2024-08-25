import Link from 'next/link'
import LoginForm from './login-form'
import SectionCarousel from './section-carousel'

const LoginPage = () => {
  return (
    <section
      id="login"
      className="grid grid-cols-1 md:grid-cols-2 md:min-h-auto h-screen"
    >
      <div className="flex flex-col justify-center items-center p-4 md:p-8">
        <div className="space-y-3 max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center md:text-left">
            Log in
          </h1>
          <p className="text-base font-normal dark:text-white text-[#475467] text-center md:text-left">
            Welcome back! Please enter your details.
          </p>
          <LoginForm />
          <div className="mt-4 flex justify-between text-sm">
            <Link href={'/register'} className="hover:underline">
              Create an account
            </Link>
            <Link
              href={'/forgot-password'}
              className="text-[#6941C6] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex space-y-20 flex-col justify-center items-center bg-[#53389E] rounded-l-3xl p-8 md:py-20">
        <div className="text-white text-center">
          <h2 className="text-xl md:text-2xl font-normal">
            Welcome to your new dashboard
          </h2>
          <p className="text-xl md:text-2xl">
            Sign in to explore changes we’ve made.
          </p>
        </div>
        <SectionCarousel />
      </div>
    </section>
  )
}

export default LoginPage
