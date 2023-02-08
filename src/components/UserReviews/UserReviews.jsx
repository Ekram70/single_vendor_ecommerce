import { Anchor, Box, Group, Paper, Rating, Text, Title } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons';
import React from 'react';

const UserReviews = () => (
  <Box component="main" className="my-5 space-y-5 px-2 pt-5 lg:basis-[78%]">
    <Box>
      <Paper component="div" className="rounded-none p-4" withBorder>
        <Group position="apart" className="mt-3 px-4">
          <Group>
            <Title order={5}>
              Product Name:{' '}
              <span className="text-sm font-medium">Brand New Body Spray</span>
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
      </Paper>
      <Paper className="rounded-none border-t-0 p-4" withBorder>
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            excepturi perspiciatis incidunt iusto nesciunt similique libero
            totam porro veniam ipsum iure, possimus ad sunt quam laborum quasi
            animi, aut laudantium placeat.
          </Text>
        </Group>
      </Paper>
    </Box>

    <Box>
      <Paper component="div" className="rounded-none p-4" withBorder>
        <Group position="apart" className="mt-3 px-4">
          <Group>
            <Title order={5}>
              Product Name:{' '}
              <span className="text-sm font-medium">Brand New Body Spray</span>
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
      </Paper>
      <Paper className="rounded-none border-t-0 p-4" withBorder>
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            excepturi perspiciatis incidunt iusto nesciunt similique libero
            totam porro veniam ipsum iure, possimus ad sunt quam laborum quasi
            animi, aut laudantium placeat.
          </Text>
        </Group>
      </Paper>
    </Box>
    <Box>
      <Paper component="div" className="rounded-none p-4" withBorder>
        <Group position="apart" className="mt-3 px-4">
          <Group>
            <Title order={5}>
              Product Name:{' '}
              <span className="text-sm font-medium">Brand New Body Spray</span>
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
      </Paper>
      <Paper className="rounded-none border-t-0 p-4" withBorder>
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            excepturi perspiciatis incidunt iusto nesciunt similique libero
            totam porro veniam ipsum iure, possimus ad sunt quam laborum quasi
            animi, aut laudantium placeat.
          </Text>
        </Group>
      </Paper>
    </Box>
  </Box>
);

export default UserReviews;
