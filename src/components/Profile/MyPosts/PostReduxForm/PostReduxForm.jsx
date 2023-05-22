import { Field, reduxForm, reset } from "redux-form";
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/FormControls';
import s from '../MyPosts.module.css'

const afterSubmit = (result, dispatch) =>
    dispatch(reset('post'));

const maxLegth30 = maxLengthCreator(30)

const addPostForm = (props) => (
    <form className={s.newPost} onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Input}
                name='post'
                placeholder='Что у вас нового?'
                validate={[ maxLegth30]}
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