import {
  Avatar,
  Box,
  Card,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
  Title
} from '@mantine/core';
import React from 'react';
import profileImage from '../../assets/images/profile.png';

const CustomarReviewsCard = () => (
  <Box className="my-5">
    <Paper className="rounded-md" withBorder>
      <Card className="flex flex-wrap items-start justify-center gap-7 p-5 sm:flex-nowrap">
        <Stack>
          <Avatar radius="xl" size="lg" src={profileImage} />
          <Title order={6} className="text-sm text-primary">
            Sienna
          </Title>
        </Stack>
        <Stack>
          <Group position="apart">
            <Text component="span" className="text-gray-400">
              December 4, 2022 at 3:12pm
            </Text>
            <Rating defaultValue={5} />
          </Group>
          <Text className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </Stack>
      </Card>
    </Paper>
  </Box>
);

export default CustomarReviewsCard;
