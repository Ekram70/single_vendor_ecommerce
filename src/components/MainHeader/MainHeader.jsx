import {
  ActionIcon,
  Anchor,
  Container,
  Group,
  Header,
  Image,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSearch, IconUser } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../assets/images/logo-black.svg";
import logoWhite from "../../assets/images/logo-white.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const MainHeader = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header>
      <Container className="h-32 max-w-[1200px] py-4">
        <Group position="apart">
          <Image
            src={dark ? logoBlack : logoWhite}
            alt="logo"
            className="max-w-[110px]"
          />

          <TextInput
            placeholder="Search for items..."
            className="grow"
            classNames={{
              root: "max-w-[650px]",
              input: "h-12",
              rightSection: "w-12",
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
            <Group className="gap-0">
              <ActionIcon className="hover:bg-transparent">
                <IconUser
                  className={`h-8 w-8 ${
                    dark ? "stroke-primary" : "stroke-secondary"
                  }`}
                />
              </ActionIcon>
              <Anchor
                component={Link}
                type="button"
                to="/login"
                className={`font-bold ${
                  dark ? "text-primary" : "text-secondary"
                }`}
              >
                Login
              </Anchor>
            </Group>
            <ThemeToggle />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default MainHeader;
