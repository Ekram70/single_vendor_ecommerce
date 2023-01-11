import {
  Badge,
  Container,
  ScrollArea,
  Table,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { IconEdit, IconSquareRoundedLetterD } from "@tabler/icons";
import React, { useState } from "react";
const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));
const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "",
  },
  {
    id: 2,
    name: "Nano Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 3,
    name: "Graham",
    username: "ggBret",
    email: "Sincere@april.biz",
  },
  {
    id: 4,
    name: "Nano ",
    username: "hjtk Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 5,
    name: "Nano Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
];

const UserOrdersTable = () => {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);
  const rows = data.map((item) => {
    const selected = selection.includes(item.id);

    return (
      <tr
        key={item.id}
        className={`${cx({
          [classes.rowSelected]: selected,
        })} className="bg-white border-b hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100  dark:hover:bg-gray-600`}
      >
        <td className="py-4 px-6">{item.id}</td>
        <td
          scope="row"
          className="flex items-center whitespace-nowrap py-4 px-6 text-gray-900 dark:text-white"
        >
          <img
            className="h-10 w-10 rounded-full "
            src="https://i.ibb.co/cr4RCLd/Portrait-of-confident-mature-black-doctor-consulting-digital-tablet-and-looking-at-camera-Smiling-af.jpg"
            alt="Jese image"
          />
          <div className="pl-3">
            <div className="text-base font-semibold"> {item.name}</div>
            <div className="font-normal text-gray-500">{item.email}</div>
          </div>
        </td>
        <td className="py-4 px-6">Dhaka-bangladesh</td>
        <td className="py-4 px-6">3/01/23</td>
        <td className="py-4 px-6  dark:text-white"> $2999</td>
        <td className="py-4 px-6  dark:text-blue-500">
          <Badge color="gray" fullWidth>
            online
          </Badge>
        </td>
        <td className="py-4 px-6">
          <span className="ml-2 flex items-center justify-between">
            <a href="">
              {" "}
              <IconEdit size={30} className="mr-3 text-primary" />
            </a>
            <a href="">
              {" "}
              <IconSquareRoundedLetterD
                size={30}
                className="ml-2 text-primary"
              />
            </a>
          </span>
        </td>
      </tr>
    );
  });
  return (
    <Container className="my-8">
      <Title className="py-3 text-2xl font-bold uppercase">Your Order</Title>
      <Text className="mb-5 text-xl font-semibold">5 orders found</Text>
      <ScrollArea>
        <Table
          unstyled
          // verticalSpacing="md"
          // highlightOnHover
          // withColumnBorders
          className="w-full text-left text-sm text-gray-500 dark:text-gray-400"
        >
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                id
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="dark:text-gray-400">{rows}</tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
};

export default UserOrdersTable;
