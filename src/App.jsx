import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import mantineThemeObj from '../config/mantineThemeObj';
import AdminDashboardLayout from './components/AdminDashboardLayout/AdminDashboardLayout';
import AllCategoriesCarosuel from './components/AllCategoriesCarosuel/AllCategoriesCarosuel';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import PersistLogin from './components/PersistLogin/PersistLogin';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddNewProductsPage from './pages/AddNewProductsPage';
import AdminAccountPage from './pages/AdminAccountPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminOrdersListsPage from './pages/AdminOrdersListsPage';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminReviewsPage from './pages/AdminReviewsPage';
import AdminSettingPage from './pages/AdminSettingPage';
import AdminTransactionsPage from './pages/AdminTransactionsPage';

import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import OtpPage from './pages/OtpPage';
import ProductsCartPage from './pages/ProductsCartPage';
import ProductsCategories from './pages/ProductsCategories';
import ProductsCheckoutPage from './pages/ProductsCheckoutPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SingleProductPage from './pages/SingleProductPage';
import UserAccountDetails from './pages/UserAccountDetails';
import UserAccountSettings from './pages/UserAccountSettings';
import UserDashBoard from './pages/UserDashBoard';
import UserOrderHistory from './pages/UserOrderHistory';
import UserReviewsPage from './pages/UserReviewsPage';
import WishListPage from './pages/WishListPage';

const ROLES = {
  Admin: 4759,
  Editor: 1567,
  User: 5698
};

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light'
  });

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
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
              {/* shop product */}
              <Route path="/productscart" element={<ProductsCartPage />} />
              <Route
                path="/productscheckout"
                element={<ProductsCheckoutPage />}
              />

              {/* Private Routes */}
              <Route element={<PersistLogin />}>
                <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                  <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<UserDashBoard />} />
                    <Route
                      path="/orderhistory"
                      element={<UserOrderHistory />}
                    />
                    <Route
                      path="/useraccountdetails"
                      element={<UserAccountDetails />}
                    />
                    <Route
                      path="/accountsettings"
                      element={<UserAccountSettings />}
                    />
                    <Route
                      path="/ordertracking"
                      element={<OrderTrackingPage />}
                    />
                    <Route path="/userreviews" element={<UserReviewsPage />} />
                    <Route path="/wishlist" element={<WishListPage />} />
                  </Route>
                </Route>
              </Route>

              {/* component testing in isolation */}
              <Route path="/test" element={<AllCategoriesCarosuel />} />

              {/* Not Found route */}
              <Route path="*" element={<Error />} />
            </Route>
            {/* admindashboard route */}
            <Route element={<AdminDashboardLayout />}>
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/adminproducts" element={<AdminProductsPage />} />
              <Route path="/adminorders" element={<AdminOrdersListsPage />} />
              <Route path="/adminreviews" element={<AdminReviewsPage />} />
              <Route path="/transactions" element={<AdminTransactionsPage />} />
              <Route path="/account" element={<AdminAccountPage />} />
              <Route path="/adminsetting" element={<AdminSettingPage />} />
              <Route path="/addnewproduct" element={<AddNewProductsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
export default App;
