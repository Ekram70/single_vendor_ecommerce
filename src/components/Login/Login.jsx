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

const Login = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <BackgroundImage
      src={bgImage}
      className={`${
        dark ? "bg-secondary" : "bg-neutral-100"
      } bg-[length:400px_400px] bg-left-top bg-repeat bg-blend-multiply 2xl:bg-auto`}
    >
      <MainHeader />
      <Center className="w-full py-32">
        <Paper className="max-w-[450px] rounded-lg bg-white p-8 text-sm text-secondary shadow-lg sm:rounded-2xl sm:p-14">
          <Title
            order={3}
            className="text-center text-xl font-bold sm:text-2xl"
          >
            Login to Your Account
          </Title>
          <Divider className="my-2.5 mx-auto h-0.5 w-44 border-0 bg-primary" />
          <form className="mt-11 space-y-7">
            <Box>
              <Text component="label" className="font-medium">
                Email
              </Text>
              <Input
                variant="filled"
                placeholder="john@gmail.com"
                classNames={{
                  input:
                    "rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400",
                }}
              />
            </Box>
            <Box>
              <Text component="label" className="font-medium">
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

            <Group position="apart" className="items-start">
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
                href="#"
                className="text-xs font-medium sm:text-sm"
              >
                Forget Password
              </Text>
            </Group>

            <Button className="w-full rounded py-2 font-bold">Login</Button>
            <Text component="p" className="text-center">
              Don't have an account?{" "}
              <Anchor component={Link} to="/register">
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
