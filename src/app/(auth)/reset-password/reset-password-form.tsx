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
  ResetPasswordBody,
  ResetPasswordBodyType,
} from '@/schema-validations/auth.schema'
import envConfig from '@/config'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

interface FieldError {
  field: 'newPassword' | 'confirmPassword' // Nếu bạn biết chắc các trường lỗi sẽ là 'newPassword' hoặc 'confirmPassword'
  message: string
}

interface ErrorPayload {
  message: string
  fields: FieldError[]
}

const ResetPasswordForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<ResetPasswordBodyType>({
    resolver: zodResolver(ResetPasswordBody),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  const storeUser = JSON.parse(localStorage.getItem('user') || '{}')

  async function onSubmit(values: ResetPasswordBodyType) {
    if (values.newPassword !== values.confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Password does not match',
      })
    }

    if (values.newPassword === values.confirmPassword) {
      // set new password and confirmPassword to local storage with object key 'user' and {
      //  email: 'email',
      //  password: 'password',
      //  name: 'name',
      //  confirmPassword: 'confirmPassword' }

      localStorage.setItem(
        'user',
        JSON.stringify({
          yourName: storeUser.yourName,
          email: storeUser.email,
          password: values.newPassword,
          confirmPassword: values.confirmPassword,
        }),
      )

      router.push('/login')
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 max-w-full flex-shrink-0 w-full"
          noValidate
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Password..."
                    {...field}
                    type="password"
                  />
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
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password..."
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="!mt-8 w-full bg-[#6941C6]">
            Reset Password
          </Button>
        </form>
      </Form>
    </>
  )
}

export default ResetPasswordForm
