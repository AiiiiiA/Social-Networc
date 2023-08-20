import React, { FC, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import NavContainer from './components/NavContainer/NavContainer';
import Login from './components/Login/Login';
import { withRouter } from './hoc/withRouter';
import { connect } from "react-redux";
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/preloader/Preloader';
import { Suspense } from 'react';
import SettingsContainer from './components/Settings/SettingsContainer';
import { AppStateType } from './types/types';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const FriendsContainer = React.lazy(() => import('./components/FriendsContainer/FriendsContainer'));
const News = React.lazy(() => import('./components/News/News'));

const App: FC<MapStateProps & AppStateType & DispatchPropsType> = ({ initializeApp, initialized }) => {

  useEffect(() => {
    initializeApp()
  }, [])

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer />

      <NavContainer />

      <Suspense fallback={<div><Preloader /></div>}>
        <Routes>

          <Route path='/' element={<News />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/friends' element={<FriendsContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<SettingsContainer />} />

        </Routes>

      </Suspense>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStateProps => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

type MapStateProps = {
  initialized: boolean
}

type DispatchPropsType = {
  initializeApp: () => void
}