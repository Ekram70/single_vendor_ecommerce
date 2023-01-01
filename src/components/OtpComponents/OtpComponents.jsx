import {
  BackgroundImage,
  Button,
  Center,
  Divider,
  Group,
  NumberInput,
  Paper,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import React from "react";
import bgImage from "../../assets/images/pattern.jpg";
import MainHeader from "../MainHeader/MainHeader";
import MainNavbar from "../MainNavbar/MainNavbar";

const OtpComponents = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const color = useColorScheme();
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
            order={3}
            className="text-center text-xl font-bold sm:text-2xl"
            color={colorScheme === "dark" ? "white" : "black"}
          >
            Enter 4 digits code
          </Title>
          <Divider className="my-2.5 mx-auto h-0.5 w-44 border-0 bg-primary" />
          <Title
            order={5}
            // color="dimmed"
            className="my-5 text-center"
            color={colorScheme === "dark" ? "white" : "black"}
          >
            Enter the 4 digits code that you have received on your email.
          </Title>
          <Group className=" my-4 mt-11 grid grid-cols-4 gap-2 rounded-lg">
            <NumberInput
              hideControls
              maxLength={1}
              classNames={{
                input: "text-center text-xl w-16 h-12 rounded-lg shadow-md",
              }}
            />
            <NumberInput
              hideControls
              maxLength={1}
              classNames={{
                input: "text-center text-xl w-16 h-12 rounded-lg shadow-md",
              }}
            />
            <NumberInput
              hideControls
              maxLength={1}
              classNames={{
                input: "text-center text-xl w-16 h-12 rounded-lg shadow-md",
              }}
            />
            <NumberInput
              hideControls
              maxLength={1}
              classNames={{
                input: "text-center text-xl w-16 h-12 rounded-lg shadow-md",
              }}
            />
          </Group>
          <Button className="my-4 w-full rounded-lg  py-3 font-bold">
            Continue
          </Button>
        </Paper>
      </Center>
    </BackgroundImage>
  );
};

export default OtpComponents;
