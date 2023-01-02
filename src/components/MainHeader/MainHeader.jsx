import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  CloseButton,
  Container,
  Group,
  Header,
  Image,
  Indicator,
  Menu,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconAdjustments,
  IconBasket,
  IconHeart,
  IconHistory,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShoppingCart,
  IconStar,
  IconUser,
} from "@tabler/icons";
import React from "react";
import logoBlack from "../../assets/images/logo-black.svg";
import logoWhite from "../../assets/images/logo-white.svg";
import productPic from "../../assets/images/product.png";
import profilePic from "../../assets/images/profile.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const MainHeader = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const isLoggedIn = true;

  return (
    <Header>
      <Container className="w-full max-w-[1200px] py-2">
        <Group position="apart" className="gap-10">
          <Image
            src={dark ? logoBlack : logoWhite}
            alt="logo"
            className="!w-12"
          />

          <TextInput
            placeholder="Search for items..."
            className="hidden grow md:block"
            classNames={{
              root: "max-w-[650px]",
              rightSection: "w-10",
            }}
            rightSection={
              <ActionIcon
                variant="filled"
                color="brand"
                className="h-full w-full rounded-l-none"
              >
                <IconSearch className="h-6 w-6 stroke-secondary" />
              </ActionIcon>
            }
          />
          <Group>
            {isLoggedIn ? (
              <Group className="gap-5">
                <Indicator
                  label={3}
                  inline
                  size={18}
                  classNames={{
                    indicator: "text-secondary",
                  }}
                >
                  <ActionIcon>
                    <IconHeart
                      className={`h-6 w-6 ${
                        dark ? "stroke-primary" : "stroke-secondary"
                      }`}
                    />
                  </ActionIcon>
                </Indicator>
                <Menu>
                  <Menu.Target>
                    <Indicator
                      label={3}
                      inline
                      size={18}
                      classNames={{
                        indicator: "text-secondary",
                      }}
                    >
                      <ActionIcon>
                        <IconShoppingCart
                          className={`h-6 w-6 ${
                            dark ? "stroke-primary" : "stroke-secondary"
                          }`}
                        />
                      </ActionIcon>
                    </Indicator>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component="div">
                      <Group className="items-start">
                        <Image src={productPic} width={50} height={50} />
                        <Stack className="gap-0">
                          <Text component="span">Daisy casual bag</Text>
                          <Text component="span">1 x $400</Text>
                        </Stack>
                        <CloseButton />
                      </Group>
                    </Menu.Item>
                    <Menu.Item component="div">
                      <Group className="items-start">
                        <Image src={productPic} width={50} height={50} />
                        <Stack className="gap-0">
                          <Text component="span">Daisy casual bag</Text>
                          <Text component="span">1 x $400</Text>
                        </Stack>
                        <CloseButton />
                      </Group>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item component="div">
                      <Group position="apart">
                        <Text component="span" className="text-lg font-medium ">
                          Total
                        </Text>
                        <Text component="span" className="text-lg font-medium">
                          $800
                        </Text>
                      </Group>
                    </Menu.Item>
                    <Menu.Item component="div">
                      <Group position="apart">
                        <Button variant="outline">View Cart</Button>
                        <Button>Checkout</Button>
                      </Group>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Menu>
                  <Menu.Target>
                    <UnstyledButton>
                      <Avatar
                        radius="xl"
                        src={profilePic}
                        size="sm"
                        alt="profile pic"
                      />
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<IconAdjustments size={14} />}>
                      Dashboard
                    </Menu.Item>
                    <Menu.Item icon={<IconBasket size={14} />}>
                      My Orders
                    </Menu.Item>
                    <Menu.Item icon={<IconHistory size={14} />}>
                      Order Tracking
                    </Menu.Item>
                    <Menu.Item icon={<IconStar size={14} />}>Reviews</Menu.Item>
                    <Menu.Item icon={<IconSettings size={14} />}>
                      Settings
                    </Menu.Item>
                    <Menu.Item icon={<IconLogout size={14} />}>
                      Logout
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            ) : (
              <Group className="gap-0">
                <ActionIcon>
                  <IconUser
                    className={`h-6 w-6 ${
                      dark ? "stroke-primary" : "stroke-secondary"
                    }`}
                  />
                </ActionIcon>
                <Anchor
                  component="button"
                  type="button"
                  className={`font-semibold ${
                    dark ? "text-primary" : "text-secondary"
                  }`}
                >
                  Login
                </Anchor>
              </Group>
            )}
            <ThemeToggle />
          </Group>
        </Group>
        <TextInput
          placeholder="Search for items..."
          className="mx-auto mt-4 grow md:hidden"
          classNames={{
            root: "max-w-[650px]",
            rightSection: "w-10",
          }}
          rightSection={
            <ActionIcon
              variant="filled"
              color="brand"
              className="h-full w-full rounded-l-none"
            >
              <IconSearch className="h-6 w-6 stroke-secondary" />
            </ActionIcon>
          }
        />
      </Container>
    </Header>
  );
};

export default MainHeader;
