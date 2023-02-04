import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Input,
  Paper,
  Stack,
  Text,
  Title
} from '@mantine/core';
import { IconAt, IconSend } from '@tabler/icons';
import React from 'react';

const NewsLetter = () => (
  <Box className="m-auto my-20">
    <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
      <Paper radius="xs" withBorder className="m-auto w-fit p-10 text-center">
        <Stack align="center" className="gap-0">
          <ActionIcon
            variant="filled"
            className="mb-5 h-[50px] w-[50px] rounded-full bg-primary"
          >
            <IconSend size={30} className="text-secondary" />
          </ActionIcon>
          <Title className="text-2xl font-bold">
            Get your daily needs from our shop
          </Title>
          <Text className="text-sm">
            Enter your email to receive exciting offers
          </Text>
          <Group position="center" className="mt-5">
            <Input
              icon={<IconAt size={20} />}
              variant="filled"
              placeholder="Enter Your Email Here"
              className="max-w-[300px]"
            />
            <Button variant="outline">Subscribe</Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  </Box>
);

export default NewsLetter;
