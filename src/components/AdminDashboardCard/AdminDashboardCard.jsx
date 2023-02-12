import { Box, Card, Group, Text, Title } from '@mantine/core';
import {
  IconCurrencyDollarCanadian,
  IconShoppingBag,
  IconShoppingCart
} from '@tabler/icons';
import React from 'react';

const AdminDashboardCard = () => {
  const mockdata = [
    {
      title: 'Revenue',
      icon: IconCurrencyDollarCanadian,
      value: ' $ 13,456.5'
    },
    { title: 'Orders', icon: IconShoppingBag, value: '500' },
    { title: 'PRODUCTS', icon: IconShoppingCart, value: '1020' }
  ];
  return (
    <Box component="main" className="px-2">
      <Box className="mb-5">
        <Title order={2} className="mb-2 text-2xl">
          Dashboard
        </Title>
        <Text className="text-sm font-medium">
          Whole data about your business here
        </Text>
      </Box>

      <Group>
        {mockdata &&
          mockdata.map((data, idx) => (
            <Card
              key={idx}
              withBorder
              className="flex min-w-[200px]  items-center  rounded-lg border-2 shadow-lg lg:w-[320px]"
            >
              <Box className="flex items-start rounded-xl ">
                <Box className="mr-5 rounded-full  bg-primary/20 p-3">
                  <data.icon size={28} />
                </Box>
                <Box className="flex flex-col space-y-2">
                  <Title order={5} className="text-primary">
                    {data.title}
                  </Title>
                  <Text component="span" className="text-xl font-semibold">
                    {data.value}
                  </Text>
                  <Text component="span" className="text-sm font-normal">
                    consectetur adipisicing elit. Quaerat asperiores
                  </Text>
                </Box>
              </Box>
            </Card>
          ))}
      </Group>
    </Box>
  );
};

export default AdminDashboardCard;
