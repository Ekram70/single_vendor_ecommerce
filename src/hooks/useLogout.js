import { useLocalStorage } from '@mantine/hooks';
import axios from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
    key: 'isLoggedIn',
    defaultValue: false
  });

  const logout = async () => {
    try {
      await axios('/logout', {
        withCredentials: true
      });

      setIsLoggedIn(false);
      setAuth({});
    } catch (err) {
      console.log(err);
    }
  };

  return logout;
};

export default useLogout;
