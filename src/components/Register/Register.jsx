import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Center,
  Divider,
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

const Register = () => {
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
            Create Your Account
          </Title>
          <Divider className="mx-auto my-2.5 h-0.5 w-44 border-0 bg-primary" />
          <form className="mt-11 space-y-7">
            <Box>
              <Text component="label" className="my-1 font-medium">
                Full Name
              </Text>
              <Input
                className=""
                placeholder="John Doe"
                variant="filled"
                classNames={{
                  input:
                    "bg-gray-200 rounded p-3   placeholder-gray-400 sm:text-base",
                }}
              ></Input>
            </Box>
            <Box>
              <Text component="label" className="my-1 font-medium">
                Email
              </Text>
              <Input
                placeholder="john@gmail.com"
                variant="filled"
                classNames={{
                  input:
                    "bg-gray-200 rounded p-3   placeholder-gray-400 sm:text-base",
                }}
              ></Input>
            </Box>
            <Box>
              <Text component="label" className="font-medium">
                Password
              </Text>
              <PasswordInput
                placeholder="********"
                variant="filled"
                classNames={{
                  input:
                    "bg-gray-200 rounded p-3   placeholder-gray-400 sm:text-base",
                }}
              />
            </Box>
            <Box>
              <Text component="label" className="font-medium">
                Confirm Password
              </Text>
              <PasswordInput
                placeholder="********"
                variant="filled"
                classNames={{
                  input:
                    "bg-gray-200 rounded p-3   placeholder-gray-400 sm:text-base",
                }}
              />
            </Box>
            <Button className="w-full rounded py-2 font-bold">
              Create Account
            </Button>
            <Text component="p" className="text-center">
              Already have an account?{" "}
              <Anchor component={Link} to="/login">
                Sign In
              </Anchor>
            </Text>
          </form>
        </Paper>
      </Center>
    </BackgroundImage>
  );
};

export default Register;
