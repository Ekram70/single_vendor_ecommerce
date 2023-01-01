import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Group,
  Input,
  Paper,
  PasswordInput,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/pattern.jpg";
import MainHeader from "../MainHeader/MainHeader";
import MainNavbar from "../MainNavbar/MainNavbar";
// import { useColorScheme } from "@mantine/hooks";

const Login = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  // const color = useColorScheme();

  return (
    <BackgroundImage
      src={bgImage}
      className={`${
        dark ? "bg-secondary" : "bg-neutral-100"
      } bg-[length:400px_400px] bg-left-top bg-repeat bg-blend-multiply 2xl:bg-auto`}
    >
      <MainHeader />
      <MainNavbar />
      <Center className="w-full py-32">
        <Paper
          className={` ${dark ? "bg-[#1A1B1E] text-white" : "bg-neutral-100"}
        max-w-[450px] rounded-lg  p-8 text-sm text-secondary shadow-lg sm:rounded-2xl sm:p-14`}
        >
          <Title
            color={colorScheme === "dark" ? "white" : "black"}
            order={3}
            className="text-center text-xl font-bold sm:text-2xl"
          >
            Login to Your Account
          </Title>
          <Divider className="my-2.5 mx-auto h-0.5 w-44 border-0 bg-primary" />
          <form className="mt-11 space-y-7">
            <Box>
              <Text
                component="label"
                className="font-medium"
                color={colorScheme === "dark" ? "white" : "black"}
              >
                Email
              </Text>
              <Input
                variant="filled"
                placeholder="john@gmail.com"
                classNames={{
                  input: "rounded p-2 sm:text-base placeholder-gray-400",
                }}
              />
            </Box>
            <Box>
              <Text
                component="label"
                className="font-medium"
                color={colorScheme === "dark" ? "white" : "black"}
              >
                Password
              </Text>
              <PasswordInput
                variant="filled"
                placeholder="********"
                classNames={{
                  input:
                    "rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400",
                  visibilityToggle: "hover:bg-gray-200",
                }}
              />
            </Box>

            <Group
              position="apart"
              className="items-start"
              color={colorScheme === "dark" ? "white" : "black"}
            >
              <Checkbox
                label="Remember Me"
                size="xs"
                classNames={{
                  label: "pl-2 font-medium text-xs sm:text-sm",
                  body: "items-center",
                }}
              />

              <Text
                component="a"
                href="/forgetpassword"
                className="text-xs font-medium sm:text-sm"
                color={colorScheme === "dark" ? "white" : "black"}
              >
                Forget Password
              </Text>
            </Group>

            <Button className="w-full rounded py-2 font-bold">Login</Button>
            <Text
              component="p"
              className="text-center"
              color={colorScheme === "dark" ? "white" : "black"}
            >
              Don't have an account?{" "}
              <Anchor
                component={Link}
                to="/register"
                color={colorScheme === "dark" ? "white" : "black"}
              >
                Sign Up
              </Anchor>
            </Text>
          </form>
        </Paper>
      </Center>
    </BackgroundImage>
  );
};

export default Login;
