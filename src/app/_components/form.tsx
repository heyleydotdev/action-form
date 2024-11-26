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

  return typeof children === "function"
    ? children({
        id,
        name,
      })
    : children
}

const FormItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div className='grid gap-y-2' {...props} />

export { FormFieldset, FormField, FormItem }
