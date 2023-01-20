import { Container, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import DashboardCard from '../components/DashboardCard/DashboardCard';
import DashbordHeader from '../components/DashbordHeader/DashbordHeader';
import MainHeader from '../components/MainHeader/MainHeader';
import SideNavbar from '../components/SideNavbar/SideNavbar';

const UserDashBoard = () => {
  const matches = useMediaQuery('(min-width: 992px)');

  return (
    <>
      <MainHeader />
      <DashbordHeader />
      <Container className="max-w-[700px] lg:max-w-[1200px]">
        <Group className="items-start" position="apart">
          {matches && <SideNavbar />}
          <DashboardCard />
        </Group>
      </Container>
    </>
  );
};

export default UserDashBoard;
