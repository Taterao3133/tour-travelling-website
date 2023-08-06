import React from 'react';
import Header from '../header/header';
import Router from '../router/router';
import Footer from '../footer/footer';


function layout() {
  return (<>
    <Header/>
    <Router/>
    <Footer/>
    </>
  )
}

export default layout;