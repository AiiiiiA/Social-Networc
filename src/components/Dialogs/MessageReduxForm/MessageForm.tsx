import { Formik, Field } from "formik"

const MessageReduxForm = (sendMessage) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.message)
        sendMessage(values.message)
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field
            type="message"
            name="message"
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

export default MessageReduxForm