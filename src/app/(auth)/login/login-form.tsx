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
import { LoginBody, LoginBodyType } from '@/schema-validations/auth.schema'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useEffect, useState } from 'react'

const LoginForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const [checkEmail, setCheckEmail] = useState(true)
  const [checkPassword, setCheckPass] = useState(true)

  useEffect(() => {
    var username = localStorage.getItem('user')
    console.log('username', username)
    if (!username) {
      localStorage.setItem('user', JSON.stringify({ email: '', password: '' }))
    }
  }, [])

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')

  async function onSubmit(values: LoginBodyType) {
    const user: any = localStorage.getItem('user')
    const storedUser = JSON.parse(user)

    console.log('storedUser.password == values.password', storedUser.password)
    console.log('storedUser.password == values.password', values.password)

    if (
      storedUser.email === values.email &&
      storedUser.password == values.password
    ) {
      router.push('/')
    } else if (storedUser.email !== values.email) {
      setCheckEmail(true)
    } else if (storedUser.password !== values.password) {
      setCheckPass(true)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 max-w-full flex-shrink-0 w-full"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email..."
                  {...field}
                  type="email"
                  onChange={(e) => {
                    field.onChange(e)
                    setCheckEmail(true)
                  }}
                />
              </FormControl>
              <FormMessage />
              {!checkEmail && (
                <FormMessage className="text-red-600">
                  Sai tài khoản
                </FormMessage>
              )}
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
                <Input
                  placeholder="Password..."
                  {...field}
                  type="password"
                  onChange={(e) => {
                    field.onChange(e)
                    setCheckPass(true)
                  }}
                />
              </FormControl>
              <FormMessage />
              {!checkPassword && (
                <FormMessage className="text-red-600">Sai mật khẩu</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Button type="submit" className="!mt-8 w-full bg-[#6941C6]">
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
