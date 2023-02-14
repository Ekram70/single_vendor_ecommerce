import {
  Box,
  Button,
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
import product2 from '../../assets/images/cardimage/ame.png';
import product1 from '../../assets/images/cardimage/master.png';
import product3 from '../../assets/images/cardimage/pypol.png';
import product4 from '../../assets/images/cardimage/visa.png';

const data = [
  {
    id: 1001,
    name: 'Master card',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: product1
  },
  {
    id: 1002,
    name: 'Paypal',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: product2
  },
  {
    id: 1003,
    name: 'Visa Card',
    username: 'ggBret',
    email: 'Sincere@april.biz',
    image: product3
  },
  {
    id: 1004,
    name: 'Amex',
    username: 'hjtk Bret',
    email: 'Sincere@april.biz',
    image: product4
  },
  {
    id: 1005,
    name: 'Visa Card',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: product1
  }
];

const AdminTransactionsLists = () => {
  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        <Text className=" lg:text-base"> $ 34.50</Text>
      </td>
      <td className="flex items-center">
        <Image
          width={55}
          height={50}
          fit="cover"
          className=""
          classNames={{
            image: 'rounded-md'
          }}
          src={item.image}
          alt="Juice image"
        />
        <Text component="h6" lineClamp={2} className="m-0 ml-4 font-semibold">
          {item.name}
        </Text>
      </td>
      <td>
        <Text className=" lg:text-base">16.12.2020, 14:21</Text>
      </td>

      <td>
        <Group position="center">
          <Button variant="outline">Detalis</Button>
        </Group>
      </td>
    </tr>
  ));
  return (
    <Box>
      <Group>
        <Title order={3} className="mb-5">
          Transactions
        </Title>
      </Group>

      <ScrollArea className="my-4 sm:w-auto">
        <Box>
          <Paper className="p-3" withBorder>
            <Box className="flex flex-row items-center justify-between">
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
              <Box className="w-32">
                <Select
                  placeholder="Methode"
                  rightSection={<IconArrowDown size={18} />}
                  rightSectionWidth={30}
                  variant="filled"
                  size="md"
                  styles={{ rightSection: { pointerEvents: 'none' } }}
                  data={['Visa', 'Master', 'Paypol', 'Ame']}
                />
              </Box>
            </Box>
          </Paper>
        </Box>
        <Table withBorder striped highlightOnHover verticalSpacing="md">
          <thead className="bg-gray-200">
            <tr className="">
              <th>Transaction ID</th>
              <th>Paid</th>
              <th className="!text-start">Method</th>
              <th>Date</th>
              <th className="!text-center">Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Box className="my-8">
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
      </Box>
    </Box>
  );
};

export default AdminTransactionsLists;
