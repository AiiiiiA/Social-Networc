import { Link } from 'react-router-dom';
import s from '../Dialogs.module.css';
import { FC } from 'react'

const Dialog: FC<DialogProps> = ({ id, avatar, firstName, lastName }) => {

    return (
        <div className={s.dialog}>
            <Link className={s.link} to={'/dialogs/' + id}>{avatar} {firstName} {lastName} </Link>
        </div>

    )
}

export default Dialog;

type DialogProps = {
    id: number,
    avatar: any,
    firstName: string,
    lastName: string
}