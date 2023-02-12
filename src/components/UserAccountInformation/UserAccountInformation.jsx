import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const UserAccountInformation = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: ''
  });
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
    key: 'isLoggedIn',
    defaultValue: false
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get('/user', {
          signal: controller.signal
        });

        isMounted && setUser(response.data?.userData);
      } catch (err) {
        console.log(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const deleteUser = async () => {
    try {
      await axiosPrivate.delete('/user');
      setIsLoggedIn(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box component="main" className="w-full px-2 lg:basis-[78%]">
      <Group position="apart" className="items-start">
        <Box component="div" className="mt-4 p-2">
          <Stack className="text-sm">
            <Title order={4}>Personal Information</Title>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Gender: {user.gender}</Text>
          </Stack>
          <Stack>
            <Title order={4} className="mt-4">
              Shipping Address
            </Title>
            <Text>{user.address}</Text>
          </Stack>
          <Button variant="outline" className="mt-5 px-10 py-3 font-bold">
            Edit
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            onClick={deleteUser}
            variant="filled"
            color="red"
            className="mt-5 px-10 font-bold"
          >
            Delete My Account
          </Button>
        </Box>
      </Group>
    </Box>
  );
};

export default UserAccountInformation;
