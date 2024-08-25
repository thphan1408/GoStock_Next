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

  async function onSubmit(values: ResetPasswordBodyType) {
    try {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      )
      //   .then(async (res) => {
      //     const payload = await res.json()
      //     console.log('payload:', payload)

      // const data = {
      //   status: res.status,
      //   payload,
      // }

      // if (!res.ok) {
      //   throw data
      // }

      // // Xóa token cũ từ localStorage
      // localStorage.removeItem('token')

      // return data
      //   })

      // Redirect đến trang đăng nhập hoặc trang chính
      //   router.push('/login')

      // Hiển thị thông báo thành công
      //   toast({
      //     title: 'Password reset successful',
      //     description: 'Please log in with your new password.',
      //   })

      console.log(result)
    } catch (error: any) {
      const errors = error.payload.errors as ErrorPayload
      const status = error.status as number
      if (status === 400) {
        errors.fields.forEach((error) => {
          form.setError(error.field as 'newPassword' | 'confirmPassword', {
            type: 'server',
            message: error.message,
          })
        })
      } else {
        toast({
          title: 'Reset failed',
          description:
            error.message || 'An error occurred during password reset.',
        })
      }
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
