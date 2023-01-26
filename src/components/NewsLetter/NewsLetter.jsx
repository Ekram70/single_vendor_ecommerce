import { ActionIcon, Box, Button, Container, Group, Input, Text, Title } from '@mantine/core';
import { IconAt, IconSend } from '@tabler/icons';
import React from 'react';

const NewsLetter = () => (
  <Box className="m-auto my-8">
    <Container className="container mx-auto rounded-2xl border border-solid border-gray-300 bg-[#FFFFFF] p-4 px-5 py-8 text-gray-500">
      <ActionIcon
        variant="filled"
        component="a"
        className="m-auto mb-8 h-[50px] w-[50px] rounded-2xl bg-[#FEB511]"
      >
        <IconSend size={35} className="text-[#000000]" />
      </ActionIcon>
      <Group className="my-3 mb-6 flex w-full flex-col xl:mb-0 sm:text-center" position="center">
        <Title className="mb-2 text-xl font-extrabold text-gray-900">
          Get your daily needs from our shop
        </Title>

        <Text className="mb-4 text-sm">Enter your email to receive exciting offers</Text>
      </Group>

      <Group className="flex w-full items-center justify-center gap-4">
        <Input
          icon={<IconAt />}
          variant="filled"
          placeholder="Enter Your Email Here"
          radius="md"
          size="lg"
        />

        <Button size="lg" variant="outline" className="bg-[#FEB511] text-[#000] ">
          Subscribe
        </Button>
      </Group>
    </Container>
  </Box>
);

export default NewsLetter;
