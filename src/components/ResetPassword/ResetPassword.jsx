import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Divider,
  Paper,
  PasswordInput,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import React from "react";
import bgImage from "../../assets/images/pattern.jpg";
import MainHeader from "../MainHeader/MainHeader";
const ResetPassword = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const color = useColorScheme();
  return (
    <BackgroundImage
      src={bgImage}
      className={`${dark ? "bg-secondary text-white" : "bg-neutral-100"}
        bg-[length:400px_400px] bg-left-top bg-repeat bg-blend-multiply 2xl:bg-auto`}
    >
      <MainHeader />
      <Center className=" w-full py-32">
        <Paper
          className={`${
            dark ? "bg-[#1A1B1E] text-white" : "bg-neutral-100"
          } max-w-[450px] rounded-lg  p-8 text-sm text-secondary shadow-lg sm:rounded-2xl sm:p-14`}
        >
          <Title
            order={3}
            className="text-center text-xl font-bold sm:text-2xl"
            color={colorScheme === "dark" ? "white" : "black"}
          >
            Reset Password
          </Title>
          <Divider className="m-auto my-2.5 h-0.5 w-44 border-0 bg-primary" />
          <Title order={6} color="dimmed" className="my-5 text-center">
            Set the new password for your account so you can login and access
            all the features.
          </Title>
          <form className="mt-11 space-y-7">
            <Box>
              <Text
                component="label"
                className="mb-1 font-medium"
                color={colorScheme === "dark" ? "white" : "black"}
              >
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
              <Text
                component="label"
                className="mb-1 font-medium"
                color={colorScheme === "dark" ? "white" : "black"}
              >
                Confirm Password
              </Text>
              <PasswordInput
                placeholder="********"
                variant="filled"
                classNames={{
                  input:
                    "bg-gray-200 rounded p-3  placeholder-gray-400 sm:text-base",
                }}
              />
            </Box>
            <Button className="w-full rounded-lg py-2 font-bold">
              Reset Password
            </Button>
          </form>
        </Paper>
      </Center>
    </BackgroundImage>
  );
};

export default ResetPassword;
