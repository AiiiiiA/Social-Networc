import { Field, Form, Formik } from "formik"
import { ChangeEventHandler, FC, FocusEventHandler, FormEventHandler } from 'react'

type FormValues = {
  message: string
}

type PropsType = {
  sendMessage: (message: string) => void
}

type FormProps = {
  values: FormValues
  errors: Errors
  handleChange: ChangeEventHandler<HTMLInputElement>,
  handleBlur: FocusEventHandler<HTMLInputElement>,
  handleSubmit: FormEventHandler<HTMLFormElement>,
  isSubmitting: boolean | undefined,
}

type Errors = { message: string }

const MessageForm: FC<PropsType> = ({ sendMessage }) => {

  const initialValues: FormValues = { message: ' ' }

  const submit = (values: FormValues,  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {

    sendMessage(values.message)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }: FormProps) => (
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />

          <button type="submit" disabled={isSubmitting}>
            Отправить
          </button>

        </form>
      )}
    </Formik>
  )
}


export default MessageForm