import React from 'react';
import { Toaster } from 'react-hot-toast';
import MainHeader from '../components/MainHeader/MainHeader';
import Register from '../components/Register/Register';

const RegisterPage = () => (
  <>
    <MainHeader />
    <Toaster />
    <Register />
  </>
);

export default RegisterPage;
