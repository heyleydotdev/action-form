"use client"

import { useActionState } from "react"
import { FormField, FormFieldset, FormItem, FormLabel, FormMessage } from "~/app/_components/form"
import { formAction } from "~/app/actions"

export default function Form() {
  const [state, action, isPending] = useActionState(formAction, undefined)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] gap-8'>
      <form action={action} encType='multipart/form-data'>
        <FormFieldset>
          <FormField name='text'>
            {(attr) => (
              <FormItem>
                <FormLabel>Text Input</FormLabel>
                <input type='text' placeholder='Text Input' defaultValue={state?.prevValues?.text} {...attr} />
                <FormMessage message={state?.fieldErrors?.text?.[0]} />
              </FormItem>
            )}
          </FormField>
          <FormField name='date'>
            {(attr) => (
              <FormItem>
                <FormLabel>Date Input</FormLabel>
                <input type='date' defaultValue={state?.prevValues?.date?.toISOString().slice(0, 10)} {...attr} />
                <FormMessage message={state?.fieldErrors?.date?.[0]} />
              </FormItem>
            )}
          </FormField>
          <FormItem>
            <FormField name='radio'>
              {(attr) => (
                <FormLabel>
                  <input
                    type='radio'
                    value='option1'
                    defaultChecked={state?.prevValues?.radio === "option1"}
                    {...attr}
                  />{" "}
                  Option 1
                </FormLabel>
              )}
            </FormField>
            <FormField name='radio'>
              {(attr) => (
                <FormLabel>
                  <input
                    type='radio'
                    value='option2'
                    defaultChecked={state?.prevValues?.radio === "option2"}
                    {...attr}
                  />{" "}
                  Option 2
                </FormLabel>
              )}
            </FormField>
            <FormMessage message={state?.fieldErrors?.radio?.[0]} />
          </FormItem>
          <FormField name='checkbox'>
            {(attr) => (
              <FormItem>
                <FormLabel>
                  <input
                    type='checkbox'
                    value='option1'
                    defaultChecked={state?.prevValues?.checkbox === "option1"}
                    {...attr}
                  />{" "}
                  Checkbox
                </FormLabel>

                <FormMessage message={state?.fieldErrors?.checkbox?.[0]} />
              </FormItem>
            )}
          </FormField>
          <FormField name='select'>
            {(attr) => (
              <FormItem>
                <FormLabel>Select Input</FormLabel>
                <select defaultValue={state?.prevValues?.select} {...attr}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
                <FormMessage message={state?.fieldErrors?.select?.[0]} />
              </FormItem>
            )}
          </FormField>
          <FormField name='textarea'>
            {(attr) => (
              <FormItem>
                <FormLabel>Textarea</FormLabel>
                <textarea
                  rows={4}
                  cols={30}
                  placeholder='Write something...'
                  defaultValue={state?.prevValues?.textarea}
                  {...attr}
                />
                <FormMessage message={state?.fieldErrors?.textarea?.[0]} />
              </FormItem>
            )}
          </FormField>
          <FormField name='range'>
            {(attr) => (
              <FormItem>
                <FormLabel>Range Input</FormLabel>
                <input type='range' min='0' max='100' defaultValue={state?.prevValues?.range} {...attr} />
                <FormMessage message={state?.fieldErrors?.textarea?.[0]} />
              </FormItem>
            )}
          </FormField>

          <button type='submit' className='border px-4 py-2'>
            {isPending ? "..." : "Submit"}
          </button>
        </FormFieldset>
      </form>

      <pre>{JSON.stringify({ state }, undefined, 2)}</pre>
    </div>
  )
}
