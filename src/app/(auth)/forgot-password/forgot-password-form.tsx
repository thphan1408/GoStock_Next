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
  ForgotPasswordBody,
  ForgotPasswordBodyType,
} from '@/schema-validations/auth.schema'
import envConfig from '@/config'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

interface FieldError {
  field: 'email' // Nếu bạn biết chắc các trường lỗi sẽ là 'email'
  message: string
}

interface ErrorPayload {
  message: string
  fields: FieldError[]
}

const ForgotPasswordForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  // 1. Define your form.
  const form = useForm<ForgotPasswordBodyType>({
    resolver: zodResolver(ForgotPasswordBody),
    defaultValues: {
      email: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: ForgotPasswordBodyType) {
    try {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/forgot-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      ).then(async (res) => {
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

      router.push('/reset-password')

      console.log(result)
    } catch (error: any) {
      const errors = error.payload.errors as ErrorPayload
      const status = error.status as number

      if (status === 404) {
        errors.fields.forEach((error) => {
          form.setError(error.field as 'email', {
            type: 'server',
            message: error.message,
          })
        })
      } else {
        toast({
          title: 'failed',
          description: error.errors.message,
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

          <Button type="submit" className="!mt-8 w-full bg-[#6941C6]">
            Send email request
          </Button>
        </form>
      </Form>
    </>
  )
}

export default ForgotPasswordForm
