import { Link } from 'react-router-dom';
import s from '../Dialogs.module.css';

const Dialog = (props) => {

    return (
        <div className={s.dialog}>
            <Link className={s.link} to={'/dialogs/' + props.id}>{props.avatar} {props.firstName} {props.lastName} </Link>
        </div>

    )
}

export default Dialog;