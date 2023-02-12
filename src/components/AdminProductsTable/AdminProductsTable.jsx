import {
  Badge,
  Box,
  Button,
  Center,
  Group,
  Image,
  Pagination,
  Paper,
  ScrollArea,
  Select,
  Table,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { IconArrowDown } from '@tabler/icons';
import React from 'react';
import Product1 from '../../assets/images/product1.png';
import Product2 from '../../assets/images/product2.png';
import Product3 from '../../assets/images/product3.png';
import Product4 from '../../assets/images/product4.png';
import Product5 from '../../assets/images/product5.png';

const data = [
  {
    id: 1,
    name: 'Samsung 25W PD Super Fast Travel Charger USB-C',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: Product1
  },
  {
    id: 2,
    name: 'Clear Complete Soft Care Anti-Dandruff Shampoo 330ml',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: Product2
  },
  {
    id: 3,
    name: 'Garnier Men Power White Super Duo Foam 100 ml',
    username: 'ggBret',
    email: 'Sincere@april.biz',
    image: Product3
  },
  {
    id: 4,
    name: 'Bowie E2 True Wireless Earphones',
    username: 'hjtk Bret',
    email: 'Sincere@april.biz',
    image: Product4
  },
  {
    id: 5,
    name: 'Drinko Juice 250 ml',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: Product5
  }
];

const AdminProductsTable = () => {
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
          src={item.image}
          alt="Juice image"
        />
        <Text component="h6" lineClamp={2} className="m-0 ml-4 font-semibold">
          {item.name}
        </Text>
      </td>
      <td>
        <Group position="apart" className="mr-5">
          <Text className=" lg:text-base"> $ 34.50</Text>
          <Badge color="yellow" size="lg" radius="lg" variant="filled">
            Active
          </Badge>
        </Group>
      </td>

      <td>
        <Group position="center">
          <Button>Edit</Button>
          <Button variant="outline">Delete</Button>
        </Group>
      </td>
    </tr>
  ));
  return (
    <Box>
      <Group position="apart">
        <Title order={3} className="mb-5">
          Products
        </Title>
        <Button className="mb-5">Add New</Button>
      </Group>

      <ScrollArea className="my-4 sm:w-auto">
        <Box>
          <Paper className="p-2" withBorder>
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
                    placeholder="All Categories"
                    rightSection={<IconArrowDown size={18} />}
                    rightSectionWidth={30}
                    variant="filled"
                    size="md"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['Food', 'Drink', 'Baby Care', 'Home']}
                  />
                </Box>

                <Box>
                  <Select
                    placeholder="Last Added"
                    rightSection={<IconArrowDown size={18} />}
                    rightSectionWidth={30}
                    variant="filled"
                    size="md"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                  />
                </Box>

                <Box>
                  <Select
                    placeholder="Status"
                    rightSection={<IconArrowDown size={18} />}
                    rightSectionWidth={30}
                    variant="filled"
                    size="md"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                  />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Table withBorder striped highlightOnHover className="min-w-[500px]">
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Box className="my-8">
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

export default AdminProductsTable;
