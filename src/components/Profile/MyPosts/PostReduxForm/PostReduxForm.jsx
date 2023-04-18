import { Field, reduxForm, reset } from "redux-form";
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormControls';

const afterSubmit = (result, dispatch) =>
    dispatch(reset('post'));

const maxLegth30 = maxLengthCreator(30)

const addPostForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Textarea}
                name='post'
                placeholder='Что у вас нового?'
                validate={[required, maxLegth30]}
            />
        </div>
        <div>
            <button>
                Отпубликовать
            </button>
        </div>
    </form>
)

const PostReduxForm = reduxForm({ form: 'post', onSubmitSuccess: afterSubmit })(addPostForm)

export default PostReduxForm