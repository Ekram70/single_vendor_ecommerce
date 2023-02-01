import { Avatar, Badge, Box, Checkbox, Group, Paper, Rating, Stack, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons';
import React from 'react';
import product1 from '../../assets/images/product4.png';

const WishList = () => (
  <Box component="main" className="w-full px-2 pt-5 lg:basis-[78%]">
    <Box component="div">
      <Group position="apart" className="rounded-md bg-yellow-400 px-6 py-4">
        <Group>
          <Checkbox color="orange" size="xs" classNames={{ label: 'font-bold text-md' }} />
          <Text className="text-sm font-semibold">Product</Text>
        </Group>
        <Group position="apart" className=" lg:space-x-8">
          <Text className="text-sm font-semibold">Price</Text>
          <Text className="text-sm font-semibold">Status</Text>
          <Text className="text-sm font-semibold">Action</Text>
          <Text className="text-sm font-semibold">Remove</Text>
        </Group>
      </Group>
    </Box>
    {/* wish card box */}
    {/* <ScrollArea> */}
    <Box component="section">
      <Box component="div" className="my-3">
        <Paper className="py-4 px-6 shadow-md">
          <Group position="apart">
            <Group>
              <Checkbox size="xs" />
              <Avatar size="lg" src={product1} />
              <Stack>
                <Text className="text-sm font-normal">Field Roast Chao Cheese Creamy Original</Text>
                <Box className="flex items-center">
                  <Rating defaultValue={4.5} size="sm" />
                  <span className="ml-1 text-sm">4.95 out of 5</span>
                </Box>
              </Stack>
            </Group>
            <Group position="apart" className=" lg:space-x-8">
              <Text className="text-sm font-semibold">$2.15</Text>
              <Text className="text-sm font-semibold">
                <Badge color="orange" variant="filled">
                  Instock
                </Badge>
              </Text>
              <Text className="text-sm font-semibold">
                {' '}
                <Badge color="orange" variant="filled">
                  Pending
                </Badge>
              </Text>
              <Text className="text-sm font-semibold">
                <IconTrash size={18} />
              </Text>
            </Group>
          </Group>
        </Paper>
      </Box>
    </Box>
    <Box component="section">
      <Box component="div" className="my-3">
        <Paper className="py-4 px-6 shadow-md">
          <Group position="apart">
            <Group>
              <Checkbox size="xs" />
              <Avatar size="lg" src={product1} />
              <Stack>
                <Text className="text-sm font-normal">Field Roast Chao Cheese Creamy Original</Text>
                <Box className="flex items-center">
                  <Rating defaultValue={4.5} size="sm" />
                  <span className="ml-1 text-sm">4.95 out of 5</span>
                </Box>
              </Stack>
            </Group>
            <Group position="apart" className=" lg:space-x-8">
              <Text className="text-sm font-semibold">$2.15</Text>
              <Text className="text-sm font-semibold">
                <Badge color="orange" variant="filled">
                  Instock
                </Badge>
              </Text>
              <Text className="text-sm font-semibold">
                {' '}
                <Badge color="orange" variant="filled">
                  Pending
                </Badge>
              </Text>
              <Text className="text-sm font-semibold">
                <IconTrash size={18} />
              </Text>
            </Group>
          </Group>
        </Paper>
      </Box>
    </Box>
    <Box component="section">
      <Box component="div" className="my-3">
        <Paper className="py-4 px-6 shadow-md">
          <Group position="apart">
            <Group>
              <Checkbox size="xs" />
              <Avatar size="lg" src={product1} />
              <Stack>
                <Text className="text-sm font-normal">Field Roast Chao Cheese Creamy Original</Text>
                <Box className="flex items-center">
                  <Rating defaultValue={4.5} size="sm" />
                  <span className="ml-1 text-sm">4.95 out of 5</span>
                </Box>
              </Stack>
            </Group>
            <Group position="apart" className=" lg:space-x-8">
              <Text className="text-sm font-semibold">$2.15</Text>
              <Text className="text-sm font-semibold">
                <Badge color="orange" variant="filled">
                  Instock
                </Badge>
              </Text>
              <Text className="text-sm font-semibold">
                {' '}
                <Badge color="orange" variant="filled">
                  Pending
                </Badge>
              </Text>
              <Text className="text-sm font-semibold">
                <IconTrash size={18} />
              </Text>
            </Group>
          </Group>
        </Paper>
      </Box>
    </Box>
    {/* </ScrollArea> */}
  </Box>
);

export default WishList;
