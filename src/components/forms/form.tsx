import { ReactElement, ReactNode } from 'react'
import { useForm, FormProvider, SubmitHandler, useFormContext } from "react-hook-form"


type FormConfig = {
  defaultValues?: Record<string, any>
}
type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler?: SubmitHandler<any>
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues }: FormProps) => {

  const formConfig: FormConfig = {}
  if (!!defaultValues) formConfig['defaultValues'] = defaultValues


  const methods = useForm<FormConfig>(formConfig)
  const { reset } = methods

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
};

export default Form;