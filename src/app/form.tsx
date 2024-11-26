"use client"

import { useActionState } from "react"
import { formAction } from "~/app/actions"

export default function Form() {
  const [state, action, isPending] = useActionState(formAction, undefined)

  return (
    <div className='grid grid-cols-[1fr_3fr] gap-8'>
      <form action={action} encType='multipart/form-data'>
        <fieldset className='grid gap-y-2'>
          <input type='text' name='text' placeholder='Text Input' />
          <input type='password' name='password' placeholder='Password Input' />
          <input type='email' name='email' placeholder='Email Input' />
          <input type='number' name='number' placeholder='Number Input' />
          <input type='date' name='date' />
          <label>
            <input type='radio' name='radio-group' value='option1' /> Option 1
          </label>
          <label>
            <input type='radio' name='radio-group' value='option2' /> Option 2
          </label>
          <label>
            <input type='checkbox' name='checkbox-group' value='option1' /> Checkbox 1
          </label>
          <label>
            <input type='checkbox' name='checkbox-group' value='option2' /> Checkbox 2
          </label>
          <select name='dropdown'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </select>
          <textarea name='textarea' rows={4} cols={30} placeholder='Write something...' />
          <input type='range' name='range' min='0' max='100' />

          <button type='submit' className='border px-4 py-2'>
            {isPending ? "..." : "Submit"}
          </button>
        </fieldset>
      </form>

      <pre>{JSON.stringify({ state }, undefined, 2)}</pre>
    </div>
  )
}
