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
import { ChevronRight } from 'lucide-react'

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

  const storeUser = JSON.parse(localStorage.getItem('user') || '{}')

  // 2. Define a submit handler.
  async function onSubmit(values: ForgotPasswordBodyType) {
    // check if email not match with local storage
    if (storeUser.email !== values.email) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Email does not match',
      })
    } else {
      router.push('/reset-password')
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
            <ChevronRight />
          </Button>
        </form>
      </Form>
    </>
  )
}

export default ForgotPasswordForm
