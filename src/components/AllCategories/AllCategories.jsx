import { Avatar, Paper, Text } from '@mantine/core';
import React from 'react';
import product2 from '../../assets/images/cat-2.png';

function AllCategories() {
  return (
    <Paper
      radius="md"
      className=" max-h-[160] max-w-[150px]  border-spacing-3 cursor-pointer bg-[#FEB51140] p-7 shadow-lg  hover:bg-gray-600"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      })}
    >
      <Avatar src={product2} size={100} mx="auto" />
      <Text align="center" size="md" weight={500} mt="md">
        Oganic Kiwi
      </Text>
      <Text align="center" color="dimmed" size="sm">
        Total 28 items
      </Text>
    </Paper>
  );
}

export default AllCategories;
