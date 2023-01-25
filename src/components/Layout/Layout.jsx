import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
// import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

const Layout = () => (
  <>
    <Toaster />
    <MainHeader />
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default Layout;
