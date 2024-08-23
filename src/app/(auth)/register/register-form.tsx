'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  RegisterBody,
  RegisterBodyType,
} from '@/schema-validations/auth.schema'
import envConfig from '@/config'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
const RegisterForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const date = new Date()
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // 1. Define your form.
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      yourName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
    await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(async (res) => await res.json())

    // form reset value
    form.reset({
      yourName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })

    // redirect to login page
    router.push('/login')

    // handle success
    toast({
      title: 'Register success!',
      description: formattedDate,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 max-w-[400px] flex-shrink-0 w-full"
        noValidate
      >
        <FormField
          control={form.control}
          name="yourName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email..." {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password..." {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm password..."
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="!mt-8 w-full">
          Sign up
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
