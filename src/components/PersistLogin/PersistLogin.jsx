import { useMantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        toast.error('Soemthing Went Wrong', {
          style: {
            borderRadius: '10px',
            background: `${dark ? '#2D2D2D' : '#FFF'}`,
            color: `${dark ? '#FFF' : '#2D2D2D'}`
          }
        });
      } finally {
        setIsLoading(false);
      }
    };
    if (!auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? <p>Loading....</p> : <Outlet />;
};

export default PersistLogin;
