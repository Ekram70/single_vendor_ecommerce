import {
  Anchor,
  Button,
  ChevronIcon,
  Container,
  Group,
  HoverCard,
  Menu,
  Navbar,
  Stack,
  Title,
} from "@mantine/core";
import React from "react";

const MainNavbar = () => {
  return (
    <Navbar>
      <Container className="w-full max-w-[1200px] py-2">
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
            <HoverCard initiallyOpened>
              <HoverCard.Target>
                <Anchor>
                  Food <ChevronIcon />
                </Anchor>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Group position="apart" className="items-start gap-10">
                  <Stack className="gap-0.5">
                    <Title order={6} className="mb-2">
                      Fruits & Vegetables
                    </Title>
                    <Anchor>Fresh Vegetables</Anchor>
                    <Anchor>Fresh Fruits</Anchor>
                  </Stack>
                  <Stack className="gap-0.5">
                    <Title order={6} className="mb-2">
                      Meat & Fish
                    </Title>
                    <Anchor>Chicken & Poultry</Anchor>
                    <Anchor>Frozen Fish</Anchor>
                    <Anchor>Meat</Anchor>
                    <Anchor>Meat Alternatives</Anchor>
                    <Anchor>Dried Fish</Anchor>
                  </Stack>
                </Group>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </Group>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
