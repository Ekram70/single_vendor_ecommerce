import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import mantineThemeObj from '../config/mantineThemeObj';
import AllCategoriesCarosuel from './components/AllCategoriesCarosuel/AllCategoriesCarosuel';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
// import RequireAuth from './components/RequireAuth/RequireAuth';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OtpPage from './pages/OtpPage';
import ProductsCategories from './pages/ProductsCategories';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SingleProductPage from './pages/SingleProductPage';
import UserDashBoard from './pages/UserDashBoard';
import UserOrderHistory from './pages/UserOrderHistory';

/* const ROLES = {
  Admin: 4759,
  Editor: 1567,
  User: 5698
}; */

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light'
  });

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...mantineThemeObj, colorScheme }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/reset" element={<ResetPasswordPage />} />
              <Route path="/forgot" element={<ForgotPasswordPage />} />
              <Route path="/otp" element={<OtpPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/categories" element={<ProductsCategories />} />
              <Route path="/singleproduct" element={<SingleProductPage />} />

              {/* Private Routes */}
              {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}> */}
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<UserDashBoard />} />
                <Route path="/orderhistory" element={<UserOrderHistory />} />
              </Route>
              {/* </Route> */}

              {/* component testing in isolation */}
              <Route path="/test" element={<AllCategoriesCarosuel />} />

              {/* Not Found route */}
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
