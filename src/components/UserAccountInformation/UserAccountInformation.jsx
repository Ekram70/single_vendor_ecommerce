import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';

const UserAccountInformation = () => (
  <Box component="main" className="w-full px-2 pt-5 lg:basis-[78%]">
    <Box component="section" className="my-5 grid gap-6 lg:grid-cols-2">
      <Box component="div" className=" p-2 shadow-sm">
        <Title order={4} className="mb-8">
          Personal Information
        </Title>
        <Stack className="p-4 font-medium">
          <Group position="apart" className="text-left">
            <Title order={5} className="font-medium">
              Nmae :
            </Title>
            <Text className="text-sm">Tareq Mahmud</Text>
          </Group>
          <Group position="apart">
            <Title order={5} className="font-medium">
              Email :
            </Title>
            <Text className="text-sm">tareqlpu5@gmail.com</Text>
          </Group>
          <Group position="apart">
            <Title order={5} className="font-medium">
              Phone :
            </Title>
            <Text className=" text-sm">01759539770</Text>
          </Group>
          <Group position="apart">
            <Title order={5} className="font-medium">
              Registration Date :
            </Title>
            <Text className="text-sm">February 22, 2022 9:53 am</Text>
          </Group>
          <Group position="apart">
            <Title order={5} className="font-medium">
              Gender :
            </Title>
            <Text className="text-sm">Male</Text>
          </Group>
          <Group>
            <Button
              variant="outline"
              color="orange"
              radius="md"
              className="mt-5 px-10 py-3 font-bold"
            >
              Edit
            </Button>
          </Group>
        </Stack>
      </Box>
      <Box component="div" className=" p-2 shadow-sm">
        <Title order={4} className="mb-5">
          Shipping Address
        </Title>
        <Stack className="p-4 font-medium">
          <Text>
            4299 Express LaneSarasota, <br /> FL 34249 USA, Sarasota
          </Text>
          <Group position="" className="my-8">
            <Button
              variant="outline"
              color="orange"
              radius="md"
              className="px-10 py-3 font-bold"
            >
              Edit
            </Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default UserAccountInformation;
