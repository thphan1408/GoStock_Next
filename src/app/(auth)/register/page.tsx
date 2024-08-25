import Link from 'next/link'
import RegisterForm from './register-form'
import SectionCarousel from '../login/section-carousel'

const RegisterPage = () => {
  return (
    <section
      id="signup"
      className="grid grid-cols-1 md:grid-cols-2 md:min-h-auto h-screen"
    >
      <div className="flex flex-col justify-center items-center p-4 md:p-8">
        <div className="space-y-3 max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center md:text-left">
            Sign up
          </h1>
          <RegisterForm />
          <div className="mt-4 flex justify-center text-sm ">
            <p>
              Already have an account?
              <Link
                href={'/login'}
                className="md:ml-2 text-[#6941C6] font-semibold hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex space-y-20 flex-col justify-center items-center bg-[#53389E] rounded-l-3xl p-8 md:py-20">
        <div className="text-white text-center">
          <h2 className="text-xl md:text-2xl font-normal">
            Welcome to your new dashboard
          </h2>
          <p className="text-xl md:text-2xl">
            Sign up to explore changes we’ve made.
          </p>
        </div>
        <SectionCarousel />
      </div>
    </section>
  )
}

export default RegisterPage
