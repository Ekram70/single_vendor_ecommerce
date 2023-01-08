import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Input,
  Paper,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Center className="min-h-[calc(100vh-55px)] w-full p-5 sm:p-10">
      <Paper
        withBorder
        shadow="lg"
        className="w-[450px] max-w-[450px] rounded-lg p-5 text-sm sm:rounded-2xl sm:p-10"
      >
        <Title order={3} className="text-center text-xl font-bold sm:text-2xl">
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
                input: "rounded p-2 sm:text-base placeholder-gray-400",
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
                input: "rounded p-2 sm:text-base placeholder-gray-400",
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
                input: "rounded p-2 sm:text-base placeholder-gray-400",
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
                input: "rounded p-2 sm:text-base placeholder-gray-400",
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
  );
};

export default Register;
