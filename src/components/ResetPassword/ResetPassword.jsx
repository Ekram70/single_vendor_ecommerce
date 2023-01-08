import {
  Box,
  Button,
  Center,
  Divider,
  Paper,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const ResetPassword = () => {
  return (
    <Center className="min-h-[calc(100vh-55px)] w-full p-5 sm:p-10">
      <Paper
        withBorder
        shadow="lg"
        className="w-[450px] max-w-[450px] rounded-lg p-5 text-sm sm:rounded-2xl sm:p-10"
      >
        <Title order={3} className="text-center text-xl font-bold sm:text-2xl">
          Reset Password
        </Title>
        <Divider className="m-auto my-2.5 h-0.5 w-44 border-0 bg-primary" />
        <Title order={6} color="dimmed" className="my-5 text-center">
          Set the new password for your account so you can login and access all
          the features.
        </Title>
        <form className="mt-11 space-y-7">
          <Box>
            <Text component="label" className="mb-1 font-medium">
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
            <Text component="label" className="mb-1 font-medium">
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
            Reset Password
          </Button>
        </form>
      </Paper>
    </Center>
  );
};

export default ResetPassword;
