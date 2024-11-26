import { z } from "zod"

export const formSchema = z.object({
  text: z.string().min(1),
  date: z
    .string()
    .date()
    .transform((s) => new Date(s)),
  radio: z.enum(["option1", "option2"]),
  checkbox: z.enum(["option1", "option2"]),
  select: z.enum(["option1", "option2", "option3"]),
  textarea: z.string().min(1),
  range: z.coerce.number().min(0).max(100),
})
