import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../features/auth/authSlice';

const RequireAuth = ({ allowedRoles }) => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  const decoded = token ? jwtDecode(token) : undefined;
  console.log(decoded);

  const roles = decoded?.roles || [];

  return roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
