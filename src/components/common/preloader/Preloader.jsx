import preloader from '../../../assets/images/loader.svg';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return (

        <div className={s.preloaderContainer}>
            <img src={preloader} />
        </div>

    )
}

export default Preloader;