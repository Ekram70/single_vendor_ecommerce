import {
  Anchor,
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
  Title
} from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Center className="min-h-[calc(100vh-55px)] w-full p-5 sm:p-10">
      <Paper
        withBorder
        shadow="lg"
        className="w-[450px] max-w-[450px] rounded-lg p-5 text-sm sm:rounded-2xl sm:p-10"
      >
        <Title order={3} className="text-center text-xl font-bold sm:text-2xl">
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
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
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
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
              }}
            />
          </Box>

          <Group position="apart" className="items-start">
            <Checkbox
              label="Remember Me"
              size="xs"
              classNames={{
                label: 'pl-2 font-medium text-xs sm:text-sm',
                body: 'items-center'
              }}
            />

            <Text component={Link} to="/forget" className="text-xs font-medium sm:text-sm">
              Forget Password
            </Text>
          </Group>

          <Button className="w-full rounded py-2 font-bold">Login</Button>
          <Text component="p" className="text-center">
            Don&rsquo;t have an account?{' '}
            <Anchor component={Link} to="/register">
              Sign Up
            </Anchor>
          </Text>
        </form>
      </Paper>
    </Center>
  );
}

export default Login;
