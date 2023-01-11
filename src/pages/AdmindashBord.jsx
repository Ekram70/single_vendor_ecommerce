import { Grid } from "@mantine/core";
import React from "react";
import DashbordCard from "../components/DashbordCard/DashbordCard";
import DashbordHeader from "../components/DashbordHeader/DashbordHeader";
import MainHeader from "../components/MainHeader/MainHeader";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import UserOrdersTable from "../components/UserOrderstable/UserOrdersTable";

const AdmindashBord = () => {
  return (
    <>
      <MainHeader />
      <DashbordHeader />
      <Grid columns={12}>
        <Grid.Col lg:span={3} md:span={6}>
          <SideNavbar />
        </Grid.Col>
        <Grid.Col lg:span={9}>
          {/* <DashbordCard /> */}
          {/* <UserOrdersTable /> */}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default AdmindashBord;
