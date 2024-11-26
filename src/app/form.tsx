"use client"

import { useActionState } from "react"
import { FormField, FormFieldset } from "~/app/_components/form"
import { formAction } from "~/app/actions"

export default function Form() {
  const [state, action, isPending] = useActionState(formAction, undefined)

  return (
    <div className='grid grid-cols-[1fr_3fr] gap-8'>
      <form action={action} encType='multipart/form-data'>
        <FormFieldset>
          <FormField name='text'>
            {(attr) => (
              <>
                <label htmlFor={attr.id}>Text Input</label>
                <input type='text' placeholder='Text Input' defaultValue={state?.prevValues?.text} {...attr} />
              </>
            )}
          </FormField>
          <FormField name='date'>
            {(attr) => (
              <>
                <label htmlFor={attr.id}>Date Input</label>
                <input type='date' defaultValue={state?.prevValues?.date?.toISOString().slice(0, 10)} {...attr} />
              </>
            )}
          </FormField>
          <FormField name='radio'>
            {(attr) => (
              <label htmlFor={attr.id}>
                <input type='radio' value='option1' defaultChecked={state?.prevValues?.radio === "option1"} {...attr} />{" "}
                Option 1
              </label>
            )}
          </FormField>
          <FormField name='radio'>
            {(attr) => (
              <label htmlFor={attr.id}>
                <input type='radio' value='option2' defaultChecked={state?.prevValues?.radio === "option2"} {...attr} />{" "}
                Option 2
              </label>
            )}
          </FormField>
          <FormField name='checkbox'>
            {(attr) => (
              <label htmlFor={attr.id}>
                <input
                  type='checkbox'
                  value='option1'
                  defaultChecked={state?.prevValues?.checkbox === "option1"}
                  {...attr}
                />{" "}
                Checkbox 1
              </label>
            )}
          </FormField>
          <FormField name='select'>
            {(attr) => (
              <>
                <label htmlFor={attr.id}>Select Input</label>
                <select defaultValue={state?.prevValues?.select} {...attr}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
              </>
            )}
          </FormField>
          <FormField name='textarea'>
            {(attr) => (
              <>
                <label htmlFor={attr.id}>Textarea</label>
                <textarea
                  rows={4}
                  cols={30}
                  placeholder='Write something...'
                  defaultValue={state?.prevValues?.textarea}
                  {...attr}
                />
              </>
            )}
          </FormField>
          <FormField name='range'>
            {(attr) => (
              <>
                <label htmlFor={attr.id}>Range Input</label>
                <input type='range' min='0' max='100' defaultValue={state?.prevValues?.range} {...attr} />
              </>
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
