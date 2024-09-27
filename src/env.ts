import { z } from 'zod'

const envSchema = z.string().url()

export const env = envSchema.parse(process.env.NEXT_PUBLIC_API_BASE_URL)
