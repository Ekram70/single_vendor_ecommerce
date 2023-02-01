import { Anchor, Box, Group, Header, Paper, Rating, Text, Title } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons';
import React from 'react';

const UserReviews = () => (
  <Box component="main" className="my-5 px-2 pt-5 lg:basis-[78%]">
    <Box
      component="div"
      className="my-4 rounded-lg border border-solid border-gray-600 p-4 shadow-md"
    >
      <Header className="h-14 w-full">
        <Group position="apart" className="mt-3 px-4">
          <Group>
            <Title order={5}>
              Product Name: <span className="text-sm font-medium">Brand New Body Spray</span>
            </Title>
          </Group>
          <Group position="apart">
            <Anchor>
              <span className="flex items-center font-medium">
                {' '}
                <IconEdit size={18} className="mr-2" /> Edit
              </span>
            </Anchor>
            <Anchor>
              <span className="flex items-center font-medium">
                {' '}
                <IconTrash size={18} className="mr-2" /> Delete
              </span>
            </Anchor>
          </Group>
        </Group>
      </Header>
      <Paper className="p-4">
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi perspiciatis
            incidunt iusto nesciunt similique libero totam porro veniam ipsum iure, possimus ad sunt
            quam laborum quasi animi, aut laudantium placeat.
          </Text>
        </Group>
      </Paper>
    </Box>
    <Box
      component="div"
      className="my-4 rounded-lg border border-solid border-gray-600 p-4 shadow-md"
    >
      <Header className="h-14 w-full">
        <Group position="apart" className="mt-3 px-4">
          <Group>
            <Title order={5}>Product Name:</Title>
            <span className="text-sm font-medium">Brand New Body Spray</span>
          </Group>
          <Group position="apart">
            <Anchor>
              <span className="flex items-center font-medium">
                {' '}
                <IconEdit size={18} className="mr-2" /> Edit
              </span>
            </Anchor>
            <Anchor>
              <span className="flex items-center font-medium">
                {' '}
                <IconTrash size={18} className="mr-2" /> Delete
              </span>
            </Anchor>
          </Group>
        </Group>
      </Header>
      <Paper className="p-4">
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi perspiciatis
            incidunt iusto nesciunt similique libero totam porro veniam ipsum iure, possimus ad sunt
            quam laborum quasi animi, aut laudantium placeat.
          </Text>
        </Group>
      </Paper>
    </Box>
    <Box
      component="div"
      className="my-4 rounded-lg border border-solid border-gray-600 p-4 shadow-md"
    >
      <Header className="h-14 w-full">
        <Group position="apart" className="mt-3 px-4">
          <Group>
            <Title order={5}>
              Product Name: <span className="text-sm font-medium">Brand New Body Spray</span>
            </Title>
          </Group>
          <Group position="apart">
            <Anchor>
              <span className="flex items-center font-medium">
                {' '}
                <IconEdit size={18} className="mr-2" /> Edit
              </span>
            </Anchor>
            <Anchor>
              <span className="flex items-center font-medium">
                {' '}
                <IconTrash size={18} className="mr-2" /> Delete
              </span>
            </Anchor>
          </Group>
        </Group>
      </Header>
      <Paper className="p-4">
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi perspiciatis
            incidunt iusto nesciunt similique libero totam porro veniam ipsum iure, possimus ad sunt
            quam laborum quasi animi, aut laudantium placeat.
          </Text>
        </Group>
      </Paper>
    </Box>
  </Box>
);

export default UserReviews;
