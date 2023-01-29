import { Burger, Drawer, Group, Space, useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Cart from '../Cart/Cart';
import Heart from '../Heart/Heart';
import LoginMenu from '../LoginMenu/LoginMenu';
import NavlinkCategories from '../NavlinkCategories/NavlinkCategories';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';

const MobileMenu = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { auth } = useAuth();
  const isLoggedIn = !!auth?.accessToken;
  const [opened, setOpened] = useState(false);

  return (
    <Group>
      <Drawer opened={opened} onClose={() => setOpened(false)} padding="xl" size={300}>
        {!isLoggedIn && <LoginMenu />}
        {isLoggedIn && (
          <Group position="apart">
            <Heart />
            <Cart />
            <UserMenu />
          </Group>
        )}

        <Space h="sm" />
        <SearchBar />
        <NavlinkCategories />
      </Drawer>
      <Burger
        size="sm"
        opened={opened}
        color={`${dark ? '#F2B33B' : '#2D2D2D'}`}
        onClick={() => setOpened(true)}
      />
    </Group>
  );
};

export default MobileMenu;
