import { reduxForm, Field, reset, InjectedFormProps } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import { FC } from 'react';

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialogMessage'))
}

const maxLegth300 = maxLengthCreator(300)

const addMessageForm: FC<InjectedFormProps<MessageFormValuesType, MessageFormOwnProps> & MessageFormOwnProps> = (handleSubmit) => (
    <form onSubmit={handleSubmit}>
        <div>
            <Field
                component={Textarea}
                name='message'
                placeholder='Введите ваше сообщение '
                validate={[required, maxLegth300]}
            />
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
)

const MessageReduxForm = reduxForm<MessageFormValuesType, MessageFormOwnProps>({ form: 'dialogMessage', onSubmitSuccess: afterSubmit })(addMessageForm);

export default MessageReduxForm;

type MessageFormValuesType = {
    message: string
}

type MessageFormOwnProps = {

}