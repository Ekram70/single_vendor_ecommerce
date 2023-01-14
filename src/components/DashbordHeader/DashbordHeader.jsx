import {
  Avatar,
  Box,
  Container,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import profilePic from "../../assets/images/profile.png";

const DashbordHeader = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Box component="section">
      <Container
        className={`w-full max-w-[700px] border-0 border-b border-solid ${
          dark ? "border-[#2C2E33]" : "border-[#e9ecef]"
        } py-2 lg:max-w-[1200px]`}
      >
        <Group className="py-2">
          <Avatar className="h-16 w-16 rounded-full" src={profilePic} />
          <Stack className="gap-0">
            <Text className="text-sm font-bold text-neutral-500">Hello,</Text>
            <Text className="text-2xl font-bold">Dashonte Clark</Text>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
};

export default DashbordHeader;
