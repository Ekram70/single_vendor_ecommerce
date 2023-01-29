import { Container, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashbordHeader from '../DashbordHeader/DashbordHeader';
import SideNavbar from '../SideNavbar/SideNavbar';

const DashboardLayout = () => {
  const isMobile = useMediaQuery('(min-width: 992px)');
  return (
    <>
      <DashbordHeader />
      <Container className="mb-20 max-w-[700px] lg:max-w-[1200px]">
        <Group className="items-start" position="apart">
          {isMobile && <SideNavbar />}
          <Outlet />
        </Group>
      </Container>
    </>
  );
};

export default DashboardLayout;
