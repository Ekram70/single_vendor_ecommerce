import { Container, Group, Header } from '@mantine/core';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
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
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
    key: 'isLoggedIn',
    defaultValue: false
  });
  const isMobile = useMediaQuery('(min-width: 992px)');

  return (
    <Header className={isMobile && 'sticky'}>
      <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
        <Group position="apart" className="gap-10 py-3">
          {!isMobile && <MobileMenu />}
          <Logo width={48} />
          {isMobile && (
            <>
              <BrowseAllCategories />
              <SearchBar />
            </>
          )}

          <Group>
            {isMobile && isLoggedIn && (
              <Group className="gap-5">
                <Heart />
                <Cart />
                <UserMenu />
              </Group>
            )}
            {isMobile && !isLoggedIn && <LoginMenu />}
            <ThemeToggle />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default MainHeader;
