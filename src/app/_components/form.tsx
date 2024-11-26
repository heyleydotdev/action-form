import { createContext, useContext, useId } from "react"
import { inferFlattenedErrors, ZodTypeAny } from "zod"

interface FormContextValues {
  fieldErrors?: inferFlattenedErrors<ZodTypeAny>["fieldErrors"]
}

const FormContext = createContext<FormContextValues>({} as FormContextValues)

const useForm = () => {
  const c = useContext(FormContext)
  if (!c) {
    throw new Error("useForm should be used within <Form>")
  }
  return c
}

const Form: React.FC<React.PropsWithChildren<FormContextValues>> = ({ fieldErrors, children }) => (
  <FormContext.Provider value={{ fieldErrors }}>{children}</FormContext.Provider>
)

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

type FormFieldContextValues = FormFieldAttributes

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
    <FormFieldContext.Provider value={{ id, name }}>
      {typeof children === "function" ? children({ id, name }) : children}
    </FormFieldContext.Provider>
  )
}

const FormItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div className='grid gap-y-2' {...props} />

const FormLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  const { id } = useFormField()

  return <label htmlFor={id} {...props} />
}

const FormMessage: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => {
  const { fieldErrors } = useForm()
  const { name } = useFormField()
  const error = fieldErrors && name in fieldErrors && fieldErrors[name]?.[0] ? fieldErrors[name][0] : null

  if (!error) {
    return null
  }

  return (
    <p className='text-red-600 text-sm font-medium' {...props}>
      {error}
    </p>
  )
}

export { Form, FormField, FormFieldset, FormItem, FormLabel, FormMessage }
