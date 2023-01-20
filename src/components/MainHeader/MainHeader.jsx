import { Container, Group, Header } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import BrowseAllCategories from '../BrowseAllCategories/BrowseAllCategories';
import Cart from '../Cart/Cart';
import Heart from '../Heart/Heart';
import LoginMenu from '../LoginMenu/LoginMenu';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import SearchBar from '../SearchBar/SearchBar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserMenu from '../UserMenu/UserMenu';

const MainHeader = () => {
  const isLoggedIn = true;
  const matches = useMediaQuery('(min-width: 992px)');

  return (
    <Header className="shadow">
      <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
        <Group position="apart" className="gap-10">
          {!matches && <MobileMenu />}
          <Logo />
          {matches && (
            <>
              <BrowseAllCategories />
              <SearchBar />
            </>
          )}

          <Group>
            {matches && isLoggedIn && (
              <Group className="gap-5">
                <Heart />
                <Cart />
                <UserMenu />
              </Group>
            )}
            {matches && !isLoggedIn && <LoginMenu />}
            <ThemeToggle />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default MainHeader;
