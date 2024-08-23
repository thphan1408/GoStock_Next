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
  LoginBody,
  LoginBodyType,
  RegisterBody,
  RegisterBodyType,
} from '@/schema-validations/auth.schema'
import envConfig from '@/config'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

interface FieldError {
  field: 'email' | 'password' // Nếu bạn biết chắc các trường lỗi sẽ là 'email' hoặc 'password'
  message: string
}

interface ErrorPayload {
  message: string
  fields: FieldError[]
}

const LoginForm = () => {
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
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    try {
      await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then(async (res) => {
        const payload = await res.json()

        const data = {
          status: res.status,
          payload,
        }

        if (!res.ok) {
          throw data
        }
        return data
      })

      // redirect to home page
      router.push('/')

      // show toast
      toast({
        title: 'Login success',
        description: `You have successfully logged in on ${formattedDate}`,
      })
    } catch (error: any) {
      const errors = error.payload.errors as ErrorPayload
      const status = error.status as number

      if (status === 401) {
        errors.fields.forEach((error) => {
          form.setError(error.field as 'email' | 'password', {
            type: 'server',
            message: error.message,
          })
        })
      } else if (status === 404) {
        errors.fields.forEach((error) => {
          form.setError(error.field as 'email' | 'password', {
            type: 'server',
            message: error.message,
          })
        })
      } else {
        toast({
          title: 'Login failed',
          description: error.errors.message,
        })
      }
    }
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
        <Button type="submit" className="!mt-8 w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
