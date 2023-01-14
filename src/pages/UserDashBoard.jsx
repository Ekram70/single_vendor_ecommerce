import React from "react";
// import DashbordCard from "../components/DashbordCard/DashbordCard";
import DashbordHeader from "../components/DashbordHeader/DashbordHeader";
import MainHeader from "../components/MainHeader/MainHeader";
import SideNavbar from "../components/SideNavbar/SideNavbar";
// import UserOrdersTable from "../components/UserOrdersTable/UserOrdersTable";

const UserDashBoard = () => {
  return (
    <>
      <MainHeader />
      <DashbordHeader />
      <SideNavbar />

      {/* <Grid>
        <Grid.Col><SideNavbar /></Grid.Col>
        <Grid.Col>
          <DashbordCard />
          <UserOrdersTable />
        </Grid.Col>
      </Grid> */}
    </>
  );
};

export default UserDashBoard;
