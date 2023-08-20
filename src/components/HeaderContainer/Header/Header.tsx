import s from './Header.module.css'
import { Link } from 'react-router-dom';
import { FC } from 'react'
import { logoPicture } from './svg/logoPicture';

type HeaderProps = {
    isAuth: boolean,
    login: string | null
    logout: () => void,

}

const Header: FC<HeaderProps> = ({ isAuth, login, logout }) => {
    return (
        <header className={s.header} >

            <div className={s.logo}>
                {logoPicture}
                <h2>IT - Net</h2>
            </div>

            <div>
                {isAuth

                    ? <div className={s.dropdown}>

                        <button className={s.dropbtn}>
                            {login}
                        </button>
                        <div className={s.dropdownContent}>
                            <a onClick={logout}>Выйти</a>
                            <a href="#">Ссылка 2</a>
                        </div>
                    </div>

                    : <Link to={'/login'}>Вход</Link>}
            </div>
        </header>
    )
}

export default Header;