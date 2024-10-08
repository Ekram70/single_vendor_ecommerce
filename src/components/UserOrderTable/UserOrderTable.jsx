import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  Image,
  ScrollArea,
  Table,
  Text,
  Title
} from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { IconCalendar, IconSettings } from '@tabler/icons';
import React from 'react';
import Product1 from '../../assets/images/product1.png';

const data = [
  {
    id: 1,
    name: 'Samsung 25W PD Super Fast Travel Charger USB-C',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: ''
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
  }
];

const UserOrderTable = () => {
  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td className="flex items-center">
        <Image
          width={50}
          height={50}
          fit="cover"
          classNames={{
            image: 'rounded-full'
          }}
          src={Product1}
          alt="Juice image"
        />
        <Text component="h6" lineClamp={2} className="m-0 ml-4 font-semibold">
          {item.name}
        </Text>
      </td>
      <td>3/01/23</td>
      <td>$2999</td>
      <td>Pending</td>
      <td>
        <ActionIcon>
          <IconSettings />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <Box component="main" className="px-2 pt-5 lg:basis-[78%]">
      <Box className="mb-5">
        <Title order={2} className="mb-2 text-2xl">
          Orders
        </Title>
        <Text className="text-sm font-medium">05 Orders Found</Text>
      </Box>

      <Group position="apart">
        <Group className="gap-y-0">
          <Anchor>All Orders</Anchor>
          <Anchor>Pending</Anchor>
          <Anchor>Completed</Anchor>
          <Anchor>Cancelled</Anchor>
        </Group>
        <Group>
          <DateRangePicker
            placeholder="Filter By Date"
            icon={<IconCalendar />}
          />
        </Group>
      </Group>

      <ScrollArea className="my-4 max-w-[calc(100vw-3rem)] sm:w-auto">
        <Table withBorder striped highlightOnHover className="min-w-[500px]">
          <thead>
            <tr>
              <th>Id</th>
              <th className="!text-center">Product Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
};

export default UserOrderTable;
