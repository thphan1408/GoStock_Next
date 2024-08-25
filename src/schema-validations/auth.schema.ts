import z from 'zod'

// Forgot Password Schema
export const ForgotPasswordBody = z
  .object({
    email: z.string().email({ message: 'Email không hợp lệ' }),
  })
  .strict()

export type ForgotPasswordBodyType = z.TypeOf<typeof ForgotPasswordBody>

export const ForgotPasswordRes = z.object({
  message: z.string(),
})

// Reset Password Schema
export const ResetPasswordBody = z
  .object({
    newPassword: z
      .string()
      .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
      .max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword'],
      })
    }
  })

export type ResetPasswordBodyType = z.TypeOf<typeof ResetPasswordBody>

export const ResetPasswordRes = z.object({
  message: z.string(),
})
export const RegisterBody = z
  .object({
    yourName: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword'],
      })
    }
  })

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      yourName: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
})

export type RegisterResType = z.TypeOf<typeof RegisterRes>

export const LoginBody = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
  })
  .strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>

export const LoginRes = RegisterRes

export type LoginResType = z.TypeOf<typeof LoginRes>
export const SlideSessionBody = z.object({}).strict()

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>
export const SlideSessionRes = RegisterRes

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>
