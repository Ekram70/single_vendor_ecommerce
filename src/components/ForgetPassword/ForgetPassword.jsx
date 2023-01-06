import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Divider,
  Input,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import bgImage from "../../assets/images/pattern.jpg";
import MainHeader from "../MainHeader/MainHeader";

const ForgetPassword = () => {
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

      <Center className="w-full py-32">
        <Paper
          className={` ${
            dark ? "bg-[#1A1B1E] text-white" : "bg-neutral-100"
          } max-w-[450px] rounded-lg  p-8 text-sm text-secondary shadow-lg  sm:rounded-2xl sm:p-14`}
        >
          <Title
            order={3}
            className={`text-center font-bold sm:text-2xl`}
            color={colorScheme === "dark" ? "white" : "black"}
          >
            Forgot Password
          </Title>
          <Divider className="m-auto my-2.5 h-0.5 w-44 border-0 bg-primary" />

          <Title
            order={6}
            color={colorScheme === "dark" ? "white" : "black"}
            className="my-5 text-center"
          >
            Enter you email for verification process, we will send 4 digits code
            to your email.
          </Title>
          <form className="mt-11 space-y-7">
            <Box>
              <Text
                component="label"
                className={`mb-1 font-medium`}
                color={colorScheme === "dark" ? "white" : "black"}
              >
                Enter Email
              </Text>
              <Input
                variant="fill"
                placeholder="john@gmail.com"
                classNames={{
                  input:
                    "rounded bg-gray-200 p-3 sm:text-base placeholder-gray-400",
                }}
              />
            </Box>
            <Button className="w-full rounded py-2 font-bold">SEND OTP</Button>
          </form>
        </Paper>
      </Center>
    </BackgroundImage>
  );
};

export default ForgetPassword;
