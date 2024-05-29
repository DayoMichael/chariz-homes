import React from 'react';
import Cookies from "js-cookie"
import AuthenticatedHome from './authenticatedHome';
import HomePage from './home';

function HomeView() {
  return (
    <>
      <AuthenticatedHome />
    </>
  )
}

export default HomeView