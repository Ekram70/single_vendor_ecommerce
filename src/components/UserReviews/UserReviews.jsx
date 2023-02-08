import {
  Box,
  Group,
  Paper,
  Rating,
  Text,
  Title,
  UnstyledButton
} from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons';
import React from 'react';

const UserReviews = () => (
  <Box component="main" className="my-5 space-y-5 px-2 pt-5 lg:basis-[78%]">
    <Box>
      <Paper component="div" className="rounded-none p-4" withBorder>
        <Group position="apart" className="mt-3">
          <Group>
            <Title order={5} className="text-sm">
              Product Name: Brand New Body Spray
            </Title>
          </Group>
          <Group>
            <UnstyledButton>
              <Group className="gap-2">
                <IconEdit size={18} />{' '}
                <Text component="span" className="text-sm">
                  Edit
                </Text>
              </Group>
            </UnstyledButton>
            <UnstyledButton>
              <Group className="gap-2">
                <IconTrash size={18} />{' '}
                <Text component="span" className="text-sm">
                  Delete
                </Text>
              </Group>
            </UnstyledButton>
          </Group>
        </Group>
      </Paper>
      <Paper className="rounded-none border-t-0 p-4" withBorder>
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-sm">
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
        <Group position="apart" className="mt-3">
          <Group>
            <Title order={5} className="text-sm">
              Product Name: Brand New Body Spray
            </Title>
          </Group>
          <Group>
            <UnstyledButton>
              <Group className="gap-2">
                <IconEdit size={18} />{' '}
                <Text component="span" className="text-sm">
                  Edit
                </Text>
              </Group>
            </UnstyledButton>
            <UnstyledButton>
              <Group className="gap-2">
                <IconTrash size={18} />{' '}
                <Text component="span" className="text-sm">
                  Delete
                </Text>
              </Group>
            </UnstyledButton>
          </Group>
        </Group>
      </Paper>
      <Paper className="rounded-none border-t-0 p-4" withBorder>
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-sm">
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
        <Group position="apart" className="mt-3">
          <Group>
            <Title order={5} className="text-sm">
              Product Name: Brand New Body Spray
            </Title>
          </Group>
          <Group>
            <UnstyledButton>
              <Group className="gap-2">
                <IconEdit size={18} />{' '}
                <Text component="span" className="text-sm">
                  Edit
                </Text>
              </Group>
            </UnstyledButton>
            <UnstyledButton>
              <Group className="gap-2">
                <IconTrash size={18} />{' '}
                <Text component="span" className="text-sm">
                  Delete
                </Text>
              </Group>
            </UnstyledButton>
          </Group>
        </Group>
      </Paper>
      <Paper className="rounded-none border-t-0 p-4" withBorder>
        <Group className="my-2">
          <Rating defaultValue={5} />
        </Group>
        <Group>
          <Text className="text-sm">
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
