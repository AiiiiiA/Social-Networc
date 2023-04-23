import s from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header} >

            <div className={s.logo}>

                <svg className={s.logoPicture} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle cx="22.83" cy="22.57" r="7.51"></circle>
                        <path d="M38,49.94a15.2,15.2,0,0,0-15.21-15.2h0a15.2,15.2,0,0,0-15.2,15.2Z"></path>
                        <circle cx="44.13" cy="27.22" r="6.05"></circle>
                        <path d="M42.4,49.94h14A12.24,12.24,0,0,0,44.13,37.7h0a12.21,12.21,0,0,0-5.75,1.43"></path>
                    </g>
                </svg>

                <h2>IT - Net</h2>
            </div>

            <div>
                {props.isAuth

                    ? <div className={s.dropdown}>

                        <button className={s.dropbtn}>
                            {props.login}
                        </button>
                        <div className={s.dropdownContent}>
                            <a onClick={props.logout}>Выйти</a>
                            <a href="#">Ссылка 2</a>
                        </div>
                    </div>

                    : <Link to={'/login'}>Вход</Link>}
            </div>
        </header>
    )
}

export default Header;