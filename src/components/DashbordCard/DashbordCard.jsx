import { Card, Container, Text, Title } from "@mantine/core";
import { IconAccessPoint, IconShoppingCart, IconUserPlus } from "@tabler/icons";
import React from "react";
const DashbordCard = () => {
  return (
    <div className="my-3">
      <div className="mx-auto my-3 max-w-[1200px] p-4">
        <Title order={2} className="m-auto my-2">
          Dashboard
        </Title>
        <Text className="m-auto">
          From your account dashboard. you can easily check & view your recent
          orders, manage your shipping and billing addresses and edit your
          password and account details.
        </Text>
      </div>

      <Container className="grid gap-3 lg:grid-cols-3">
        <Card
          unstyled
          className="flex items-center justify-around rounded-lg border-2 shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="rounded-xl bg-red-200 p-2">
            <IconUserPlus size={25} className="" />
          </div>

          <div>
            <Title order={5} className="text-green-300">
              Total Clients
            </Title>
            <Text className="my-2 text-xl font-semibold">2266</Text>
          </div>
        </Card>
        <Card
          unstyled
          className="flex items-center justify-around rounded-lg border-2 shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="rounded-md bg-blue-200 p-2">
            <IconAccessPoint size={25} className=" " />
          </div>

          <div>
            <Title order={5} className="text-green-300">
              Account Blance
            </Title>
            <Text className="my-2 text-xl font-semibold">$152266</Text>
          </div>
        </Card>
        <Card
          unstyled
          className="flex items-center justify-around rounded-lg border-2 shadow-lg hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-[#000000]"
        >
          <div className="rounded-md bg-blue-200 p-2">
            <IconShoppingCart size={25} className="" />
          </div>

          <div>
            <Title order={5} className="text-green-300">
              New Sales
            </Title>
            <Text className="my-2 text-xl font-semibold dark:text-white">
              266
            </Text>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default DashbordCard;
