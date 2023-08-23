import { Formik } from "formik"
import { ChangeEventHandler, FC, FocusEventHandler, FormEventHandler } from 'react'
import { FilterType } from "../../../../Redux/userReducer"
import { Field } from "formik"

type FormValues = {
  term: string,
  friend: string
}

type PropsType = {
  pageSize: number,
  currentPage: number,
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void,
  filter: FilterType
}

type FormProps = {
  values: FormValues
  errors: Errors
  handleChange: ChangeEventHandler<HTMLInputElement>,
  handleBlur: FocusEventHandler<HTMLInputElement>,
  handleSubmit: FormEventHandler<HTMLFormElement>,
  isSubmitting: boolean | undefined,
}

type Errors = { term: string, friend: string }

const UserSearchForm: FC<PropsType> = ({ requestUsers, currentPage, pageSize, filter }) => {

  const initialValues: FormValues = filter

  const submit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log(values)
    requestUsers(currentPage, pageSize, values)
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

          <Field
            type="text"
            name="term"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.term}
          />

          {errors.term}

          <Field name="friend" as="select" values={values.friend}>
            <option value="" >Всех</option>
            <option value="true" >Подписки</option>
            <option value="false" >Не подписан</option>
          </Field>

          <button type="submit" disabled={isSubmitting}>
            Поиск
          </button>

        </form>
      )}
    </Formik>
  )
}


export default UserSearchForm