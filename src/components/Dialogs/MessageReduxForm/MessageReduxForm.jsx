import { reduxForm, Field, reset } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialogMessage'))
}

const maxLegth300 = maxLengthCreator(300)

const addMessageForm = (props) => (
    <form onSubmit={props.handleSubmit}>
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

const MessageReduxForm = reduxForm({ form: 'dialogMessage', onSubmitSuccess: afterSubmit })(addMessageForm);

export default MessageReduxForm;