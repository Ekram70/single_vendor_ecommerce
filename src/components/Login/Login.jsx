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
} from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/pattern.jpg';

const Login = () => {
  return (
    <BackgroundImage
      src={bgImage}
      className="bg-repeat bg-[length:400px_400px] 2xl:bg-auto bg-left-top bg-primary bg-blend-multiply"
    >
      <Center className="w-full h-screen">
        <Paper className="p-8 sm:p-14 drop-shadow-lg text-sm rounded-lg sm:rounded-2xl max-w-[450px] bg-white text-secondary">
          <Title
            order={3}
            className="text-center text-xl sm:text-2xl font-bold"
          >
            Login to Your Account
          </Title>
          <Divider className="my-2.5 h-0.5 w-44 bg-primary border-0 mx-auto" />
          <form className="mt-11">
            <Box component="div">
              <Text component="label" className="font-medium">
                Enter Email
              </Text>
              <Input
                variant="filled"
                placeholder="john@gmail.com"
                classNames={{
                  input:
                    'rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400',
                }}
              />
            </Box>
            <Box component="div" className="mt-7">
              <Text component="label" className="font-medium">
                Password
              </Text>
              <PasswordInput
                variant="filled"
                placeholder="********"
                classNames={{
                  input:
                    'rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400',
                  visibilityToggle: 'hover:bg-gray-200',
                }}
              />
            </Box>

            <Group position="apart" className="mt-4 items-start">
              <Checkbox
                label="Remember Me"
                size="xs"
                classNames={{
                  label: 'pl-2 font-medium text-xs sm:text-sm',
                  body: 'items-center',
                }}
              />

              <Text
                component="a"
                href="#"
                className="font-medium text-xs sm:text-sm"
              >
                Forget Password
              </Text>
            </Group>

            <Button className="py-2 mt-7 w-full rounded font-bold">
              Login
            </Button>
            <Text component="p" className="text-center mt-2">
              Don't have an account?{' '}
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
