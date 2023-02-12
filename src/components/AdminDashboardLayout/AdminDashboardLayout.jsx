/* eslint-disable prettier/prettier */
import {
  AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme
} from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideNav from '../AdminSideNav/AdminSideNav';

const AdminDashboardLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
     className=''
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          // component={ScrollArea}
          hiddenBreakpoint="sm"
          height={600}
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
        <AdminSideNav/>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md" className=''>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

        <Text>header </Text>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default AdminDashboardLayout;
