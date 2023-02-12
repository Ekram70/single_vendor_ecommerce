import { useLocalStorage } from '@mantine/hooks';
import axios from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    // eslint-disable-next-line no-unused-vars
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
      key: 'isLoggedIn',
      defaultValue: false
    });
    setIsLoggedIn(false);
    setAuth({});
    try {
      await axios('/logout', {
        withCredentials: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  return logout;
};

export default useLogout;
