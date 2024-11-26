"use server"

import { z } from "zod"
import { formSchema } from "~/lib/validations"

export async function formAction(_: unknown, formData: FormData) {
  const { data, success, error } = formSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!success) {
    const prevValues = formSchema
      .extend({ range: z.coerce.number() })
      .partial()
      .safeParse(Object.fromEntries(Array.from(formData.entries()).filter(([, v]) => Boolean(v)))).data

    return {
      prevValues,
      fieldErrors: error.flatten().fieldErrors,
    }
  }

  return { data }
}
