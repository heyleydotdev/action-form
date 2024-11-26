"use server"

export async function formAction(_: unknown, formData: FormData) {
  return Object.fromEntries(formData.entries())
}
