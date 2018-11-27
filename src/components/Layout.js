import React from 'react'

import { Route } from "react-router-dom"

// import { Query } from 'react-apollo'
// import { me } from '../graphql/user'

import SimpleNavBar from './shared/SimpleNavBar'
import UnderDevNotification from './UnderDevNotification';
import EmailConfirmation from './EmailConfirmation';

const Layout = ({ token, refreshToken }) => {
  return <>
    <SimpleNavBar
      title='lk.honingovanie.ru'
      username='Личный кабинет клиента'
    />
    <Route
      path='/confirm/:token'
      render={({ match }) => <EmailConfirmation token={match.params.token}/>}
    />
    <UnderDevNotification />
  </>
}

export default Layout