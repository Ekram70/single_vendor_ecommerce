/* eslint-disable prettier/prettier */
import {
  Badge,
  Box,
  Button,
  Center,
  Group,
  Menu,
  Pagination,
  Paper,
  ScrollArea,
  Select,
  Table,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { IconArrowDown, IconDetails, IconDots, IconEdit, IconTrash } from '@tabler/icons';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Samsung 25W PD Super Fast Travel Charger USB-C',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Clear Complete Soft Care Anti-Dandruff Shampoo 330ml',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 3,
    name: 'Garnier Men Power White Super Duo Foam 100 ml',
    username: 'ggBret',
    email: 'Sincere@april.biz'
  },
  {
    id: 4,
    name: 'Bowie E2 True Wireless Earphones',
    username: 'hjtk Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 5,
    name: 'Drinko Juice 250 ml',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 6,
    name: 'Drinko Juice 250 ml',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 7,
    name: 'Drinko Juice 250 ml',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 8,
    name: 'Drinko Juice 250 ml',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
];

const AdminOrdersLists = () => {
  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td className="">
        <Text component="h6" lineClamp={2} className="m-0 ml-4 font-semibold">
          {item.username}
        </Text>
      </td>
      <td className="">
        <Text component="h6" lineClamp={2} className="m-0 ml-4 font-semibold">
          {item.email}
        </Text>
      </td>
      <td>
          <Text className=" lg:text-base"> $ 34.50</Text>
      </td>
      <td>
         <Group>
         <Badge color="orange" variant="filled">Active</Badge>
         </Group>
      </td>
      <td>
          <Text className=" lg:text-base"> 03.12.2020</Text>
      </td>

      <td>
        <Group position="center">
          <Button>Details</Button>
          <Menu width={150} shadow="md">
            <Menu.Target>
            <Button variant="outline" className="mt-0">
            <IconDots size={18}/>
          </Button>
            </Menu.Target>
            <Menu.Dropdown>
            <Menu.Item icon={<IconDetails size={18} />}>
             View Details
            </Menu.Item>
            <Menu.Item   icon={<IconEdit size={18} />}>
             Edit Info
            </Menu.Item>
            <Menu.Item color="red" icon={<IconTrash size={18} />}>
             Delete
            </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          {/* <Button variant="outline" size="xs">
            <IconDots size={14}/>
          </Button> */}
        </Group>
      </td>
    </tr>
  ));
  return (
    <Box component='main' className='my-5'>
      <Group position="apart">
        <Box className='mb-5'>
        <Title order={3} className="">
          Order List
        </Title>
        <Text component='span'>Lorem ipsum, dolor sit amet consectetur .</Text>
        </Box>
       
        <TextInput
          placeholder="Order Id"
          variant="filled"
          radius="sm"
          size="md"
        />
      </Group>

      <ScrollArea className="my-4 sm:w-auto">
        <Box>
          <Paper className="p-4" withBorder>
            <Box className="flex flex-row gap-4">
              <Group className="ml-2 w-3/4">
                <Box>
                  <TextInput
                    placeholder="Search for items"
                    variant="filled"
                    radius="sm"
                    size="md"
                  />
                </Box>
              </Group>
              <Box className="flex flex-row gap-4">
                <Box>
                  <Select
                    placeholder="Status"
                    rightSection={<IconArrowDown size={18} />}
                    rightSectionWidth={30}
                    variant="filled"
                    size="md"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['Status','Active', 'Disabled', 'Shoe All']}
                  />
                </Box>
                <Box>
                  <Select
                    placeholder="Show"
                    rightSection={<IconArrowDown size={18} />}
                    rightSectionWidth={30}
                    variant="filled"
                    size="md"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['Show 20', 'Show 30', 'Show 50']}
                  />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        {/* table start here */}

        <Table withBorder striped highlightOnHover verticalSpacing="md" className="">
        <thead className='bg-gray-200' >
            <tr className=''>
              <th>#Id</th>
              <th className="!text-start"> Name</th>
              <th>Email</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th  className="!text-center">Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Box component='div' className="my-8">
        <Center>
          <Paper
            className="rounded-full bg-gray-500 py-3 px-4 lg:w-2/4"
            withBorder
          >
            <Pagination
              total={8}
              radius="md"
              color="yellow"
              position="center"
              className=""
            />
          </Paper>
        </Center>
      </Box>
    </Box>
  );
};

export default AdminOrdersLists;
