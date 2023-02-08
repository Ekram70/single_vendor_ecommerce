import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Group,
  Paper,
  Rating,
  Stack,
  Text
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons';
import React from 'react';
import product1 from '../../assets/images/product4.png';

const WishList = () => {
  const isMobile = useMediaQuery('(min-width: 576px)');

  return (
    <Box component="main" className="w-full px-0 pt-5 md:px-2 lg:basis-[78%]">
      <Group
        position="apart"
        className="justify-end gap-0 rounded-md bg-primary py-2 px-4 text-sm font-bold text-secondary"
      >
        <Text className="w-1/2">Product</Text>
        <Group position="apart" className="sm:w-2/5">
          <Text>Price</Text>
          <Text>Status</Text>
          <Text>Remove</Text>
        </Group>
      </Group>

      <Box component="section">
        <Paper className="my-4 p-4" withBorder>
          <Group position="apart" className={`${!isMobile && 'flex-col'}`}>
            <Group className="justify-center gap-0 sm:w-1/2 sm:justify-start">
              <Avatar size="lg" src={product1} />
              <Stack className="items-center gap-0 sm:items-start">
                <Text className="text-center text-sm font-semibold sm:text-start">
                  Field Roast Chao Cheese Creamy Original
                </Text>
                <Group>
                  <Rating defaultValue={4.5} size="sm" />
                  <Text component="span" className="text-sm text-gray-400">
                    (4.5)
                  </Text>
                </Group>
              </Stack>
            </Group>
            <Group position="apart" className="sm:w-2/5">
              <Text className="text-2xl font-semibold">$2.15</Text>
              <Badge variant="filled">Instock</Badge>
              <ActionIcon>
                <IconTrash size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Paper>

        <Paper className="my-4 p-4" withBorder>
          <Group position="apart" className={`${!isMobile && 'flex-col'}`}>
            <Group className="justify-center gap-0 sm:w-1/2 sm:justify-start">
              <Avatar size="lg" src={product1} />
              <Stack className="items-center gap-0 sm:items-start">
                <Text className="text-center text-sm font-semibold sm:text-start">
                  Field Roast Chao Cheese Creamy Original
                </Text>
                <Group>
                  <Rating defaultValue={4.5} size="sm" />
                  <Text component="span" className="text-sm text-gray-400">
                    (4.5)
                  </Text>
                </Group>
              </Stack>
            </Group>
            <Group position="apart" className="sm:w-2/5">
              <Text className="text-2xl font-semibold">$2.15</Text>
              <Badge variant="filled">Instock</Badge>
              <ActionIcon>
                <IconTrash size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Paper>

        <Paper className="my-4 p-4" withBorder>
          <Group position="apart" className={`${!isMobile && 'flex-col'}`}>
            <Group className="justify-center gap-0 sm:w-1/2 sm:justify-start">
              <Avatar size="lg" src={product1} />
              <Stack className="items-center gap-0 sm:items-start">
                <Text className="text-center text-sm font-semibold sm:text-start">
                  Field Roast Chao Cheese Creamy Original
                </Text>
                <Group>
                  <Rating defaultValue={4.5} size="sm" />
                  <Text component="span" className="text-sm text-gray-400">
                    (4.5)
                  </Text>
                </Group>
              </Stack>
            </Group>
            <Group position="apart" className="sm:w-2/5">
              <Text className="text-2xl font-semibold">$2.15</Text>
              <Badge variant="filled">Instock</Badge>
              <ActionIcon>
                <IconTrash size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Paper>
      </Box>
    </Box>
  );
};

export default WishList;
