"use client"

import { useActionState } from "react"
import { formAction } from "~/app/actions"

export default function Form() {
  const [state, action, isPending] = useActionState(formAction, undefined)

  return (
    <div className='grid grid-cols-[1fr_3fr] gap-8'>
      <form action={action} encType='multipart/form-data'>
        <fieldset className='grid gap-y-2'>
          <input type='text' name='text' placeholder='Text Input' defaultValue={state?.prevValues?.text} />
          <input
            type='password'
            name='password'
            placeholder='Password Input'
            defaultValue={state?.prevValues?.password}
          />
          <input type='email' name='email' placeholder='Email Input' defaultValue={state?.prevValues?.email} />
          <input type='number' name='number' placeholder='Number Input' defaultValue={state?.prevValues?.number} />
          <input type='date' name='date' defaultValue={state?.prevValues?.date?.toISOString().slice(0, 10)} />
          <label>
            <input
              type='radio'
              name='radio-group'
              value='option1'
              defaultChecked={state?.prevValues?.["radio-group"] === "option1"}
            />{" "}
            Option 1
          </label>
          <label>
            <input
              type='radio'
              name='radio-group'
              value='option2'
              defaultChecked={state?.prevValues?.["radio-group"] === "option2"}
            />{" "}
            Option 2
          </label>
          <label>
            <input
              type='checkbox'
              name='checkbox'
              value='option1'
              defaultChecked={state?.prevValues?.checkbox === "option1"}
            />{" "}
            Checkbox 1
          </label>
          <select name='dropdown'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </select>
          <textarea
            name='textarea'
            rows={4}
            cols={30}
            placeholder='Write something...'
            defaultValue={state?.prevValues?.textarea}
          />
          <input type='range' name='range' min='0' max='100' defaultValue={state?.prevValues?.range} />

          <button type='submit' className='border px-4 py-2'>
            {isPending ? "..." : "Submit"}
          </button>
        </fieldset>
      </form>

      <pre>{JSON.stringify({ state }, undefined, 2)}</pre>
    </div>
  )
}
