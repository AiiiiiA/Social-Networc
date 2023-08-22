import { Field, InjectedFormProps, reduxForm, reset } from "redux-form";
import { maxLengthCreator } from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/FormControls';
import s from '../MyPosts.module.css'
import { FC } from 'react'

const afterSubmit = (dispatch: any) => dispatch(reset('post'));

const maxLegth30 = maxLengthCreator(30)

const addPostForm: FC<InjectedFormProps<PostFormValuesType, PostFormOwnProps> & PostFormOwnProps> = ({ handleSubmit }) => (
    <form className={s.newPost} onSubmit={handleSubmit}>
        <div>
            <Field
                component={Input}
                name='post'
                placeholder='Что у вас нового?'
                validate={[maxLegth30]}
            />
        </div>
        <div>
            <button>
                Отпубликовать
            </button>
        </div>
    </form>
)

const PostReduxForm = reduxForm<PostFormValuesType, PostFormOwnProps>({ form: 'post', onSubmitSuccess: afterSubmit })(addPostForm)

export default PostReduxForm

export type PostFormValuesType = {
    post: string
}

type PostFormOwnProps = {
}