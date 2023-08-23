import { Formik } from "formik"
import { ChangeEventHandler, FC, FocusEventHandler, FormEventHandler } from 'react'

type FormValues = {
  message: string
}

type PropsType = {
  
}

type FormProps = {
  values: FormValues
  errors: Errors
  handleChange: ChangeEventHandler<HTMLInputElement>,
  handleBlur: FocusEventHandler<HTMLInputElement>,
  handleSubmit: FormEventHandler<HTMLFormElement>,
  isSubmitting: boolean | undefined,
}

type Errors = { term: string }

const MessageForm: FC<PropsType> = ({  }) => {

  const initialValues: FormValues = { message: '' }

/*   const validators = (values: FormValues) => {
    const errors: Errors = { term: '' };
    if (values.message.length > 1000) {
      errors.term = 'Введено слишком большое количество символов';
    }
    return errors;
  } */

  const submit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    /* requestUsers(currentPage, pageSize, values.term) */
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      /* validate={validators} */
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

          {errors.term}

          <button type="submit" disabled={isSubmitting}>
            Отправить
          </button>

        </form>
      )}
    </Formik>
  )
}


export default MessageForm