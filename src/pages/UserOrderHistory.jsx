import { Container, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import DashbordHeader from '../components/DashbordHeader/DashbordHeader';
import SideNavbar from '../components/SideNavbar/SideNavbar';
import UserOrderTable from '../components/UserOrderTable/UserOrderTable';

const UserOrderHistory = () => {
  const isMobile = useMediaQuery('(min-width: 992px)');

  return (
    <>
      <DashbordHeader />
      <Container className="max-w-[700px] lg:max-w-[1200px]">
        <Group className="items-start" position="apart">
          {isMobile && <SideNavbar />}
          <UserOrderTable />
        </Group>
      </Container>
    </>
  );
};

export default UserOrderHistory;
