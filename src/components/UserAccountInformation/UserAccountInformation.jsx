import { Box, Button, Stack, Text, Title } from '@mantine/core';
import React from 'react';

const UserAccountInformation = () => (
  <Box component="main" className="w-full px-2 lg:basis-[78%]">
    <Box component="section">
      <Box component="div" className="mt-4 p-2">
        <Stack className="text-sm">
          <Title order={4}>Personal Information</Title>
          <Text>Name: Tareq Mahmud</Text>
          <Text>Email: tareqlpu5@gmail.com</Text>
          <Text>Phone: 01759539770</Text>
          <Text>Gender: Male</Text>
        </Stack>
        <Stack>
          <Title order={4} className="mt-4">
            Shipping Address
          </Title>
          <Text>
            4299 Express LaneSarasota, <br /> FL 34249 USA, Sarasota
          </Text>
        </Stack>
        <Button variant="outline" className="mt-5 px-10 py-3 font-bold">
          Edit
        </Button>
      </Box>
    </Box>
  </Box>
);

export default UserAccountInformation;
