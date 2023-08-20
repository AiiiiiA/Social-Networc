import Nav from './Nav/Nav';
import { FC } from 'react';
import { connect } from 'react-redux';
import { getAuthId, getIsAuth } from '../../Redux/authSelectors';
import { AppStateType } from '../../types/types';


const NavContainer: FC<MapStateToProps> = ({id, isAuth}) => {

    return (
        <Nav id={id}/>
    )
}

type MapStateToProps = {
    id: number | null,
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    id: getAuthId(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps)(NavContainer);