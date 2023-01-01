import {
  Anchor,
  Button,
  ChevronIcon,
  Container,
  Group,
  Menu,
  Navbar,
} from "@mantine/core";
import React from "react";

const MainNavbar = () => {
  return (
    <Navbar>
      <Container className="max-w-[1200px] py-2">
        <Group position="apart">
          <Menu>
            <Menu.Target>
              <Button rightIcon={<ChevronIcon />}>Browse All Categories</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Food</Menu.Item>
              <Menu.Item>Cleaning Supplies</Menu.Item>
              <Menu.Item>Personal Care</Menu.Item>
              <Menu.Item>Health & Wellness</Menu.Item>
              <Menu.Item>Baby Care</Menu.Item>
              <Menu.Item>Home & Kitchen</Menu.Item>
              <Menu.Item>Stationary & Office</Menu.Item>
              <Menu.Item>Pet Care</Menu.Item>
              <Menu.Item>Toys & Sports</Menu.Item>
              <Menu.Item>Beauty & Makeup</Menu.Item>
              <Menu.Item>Fashion & Lifestyle</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Group>
            <Anchor>Deals & Offers</Anchor>
          </Group>
        </Group>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
