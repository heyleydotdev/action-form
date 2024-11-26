import { z } from "zod"

export const formSchema = z.object({
  text: z.string().min(1),
  password: z.string().min(1),
  email: z.string().min(1),
  number: z.coerce.number().min(1),
  date: z
    .string()
    .date()
    .transform((s) => new Date(s)),
  "radio-group": z.enum(["option1", "option2"]),
  checkbox: z.enum(["option1", "option2"]),
  dropdown: z.enum(["option1", "option2", "option3"]),
  textarea: z.string().min(1),
  range: z.coerce.number().min(0).max(100),
})
