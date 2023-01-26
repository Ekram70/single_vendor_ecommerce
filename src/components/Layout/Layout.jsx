import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';

const Layout = () => (
  <>
    <Toaster />
    <MainHeader />
    <Outlet />
    <MainFooter />
  </>
);

export default Layout;
