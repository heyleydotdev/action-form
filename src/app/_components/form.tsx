import { createContext, useContext, useId } from "react"

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

interface FormFieldContextValues {
  id: string
}

const FormFieldContext = createContext<FormFieldContextValues>({} as FormFieldContextValues)

const useFormField = () => {
  const c = useContext(FormFieldContext)
  if (!c) {
    throw new Error("useFormField should be used within <FormField>")
  }
  return c
}

const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  const id = useId()

  return (
    <FormFieldContext.Provider value={{ id }}>
      {typeof children === "function" ? children({ id, name }) : children}
    </FormFieldContext.Provider>
  )
}

const FormItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div className='grid gap-y-2' {...props} />

const FormLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  const { id } = useFormField()

  return <label htmlFor={id} {...props} />
}

const FormMessage: React.FC<React.HTMLAttributes<HTMLParagraphElement> & { message?: string | null }> = ({
  message,
  ...rest
}) => {
  if (!message) {
    return null
  }

  return (
    <p className='text-red-600 text-sm font-medium' {...rest}>
      {message}
    </p>
  )
}

export { FormFieldset, FormField, FormItem, FormLabel, FormMessage }
