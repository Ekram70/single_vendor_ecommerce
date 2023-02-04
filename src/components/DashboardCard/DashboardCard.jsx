import { Box, Card, Group, Text, Title } from '@mantine/core';
import {
  IconBasket,
  IconCash,
  IconShoppingCart,
  IconStar
} from '@tabler/icons';
import React from 'react';

const DashboardCard = () => {
  const mockdata = [
    { title: 'Total Orders', icon: IconBasket, value: 30 },
    { title: 'Amount Spent', icon: IconCash, value: 2000 },
    { title: 'Active Order', icon: IconShoppingCart, value: 10 },
    { title: 'Reviews Given', icon: IconStar, value: 5 }
  ];

  return (
    <Box component="main" className="px-2 pt-5 lg:basis-[78%] ">
      <Box className="mb-5">
        <Title order={2} className="mb-2 text-2xl">
          Dashboard
        </Title>
        <Text className="text-sm font-medium">
          From your account dashboard. you can easily check & view your recent
          orders, manage your shipping and billing addresses and edit your
          password and account details.
        </Text>
      </Box>

      <Group>
        {mockdata &&
          mockdata.map((data, idx) => (
            <Card
              key={idx}
              withBorder
              className="flex min-w-[200px] items-center rounded-lg border-2 shadow-lg"
            >
              <Box className="mr-4 flex items-center rounded-xl bg-primary/20 p-2">
                <data.icon size={25} />
              </Box>

              <Box>
                <Title order={5} className="text-primary">
                  {data.title}
                </Title>
                <Text component="span" className="my-2 text-xl font-semibold">
                  {data.value}
                </Text>
              </Box>
            </Card>
          ))}
      </Group>
    </Box>
  );
};

export default DashboardCard;
