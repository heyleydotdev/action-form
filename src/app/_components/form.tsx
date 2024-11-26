import { useId } from "react"

const FormFieldset: React.FC<React.FieldsetHTMLAttributes<HTMLFieldSetElement>> = (props) => (
  <fieldset className='grid gap-y-5' {...props} />
)

interface FormFieldAttributes {
  id: string
  name: string
}

interface FormFieldProps {
  name: string
  children: ((attr: FormFieldAttributes) => React.ReactNode) | React.ReactNode
}

const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  const id = useId()

  return (
    <div className='grid gap-y-2'>
      {typeof children === "function"
        ? children({
            id,
            name,
          })
        : children}
    </div>
  )
}

export { FormFieldset, FormField }
