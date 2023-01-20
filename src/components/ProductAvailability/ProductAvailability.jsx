import { Anchor, Box, Checkbox, Container, Divider, Group, Text } from '@mantine/core';
import React from 'react';

const ProductAvailability = () => (
  <Container className=" my-4 rounded-lg px-7 py-8 shadow-lg outline  outline-2 outline-offset-2 outline-[#C1C2C5] hover:outline-2 hover:outline-offset-2 hover:outline-green-400">
    <Box className=" ">
      <Group position="apart" className="mb-4">
        <Text className="font-semibold">Availability</Text>
        <Text className="font-semibold text-[#FEB511]">Reset</Text>
      </Group>
    </Box>
    <Divider className="mb-2" size="sm" width="100%" />
    <Box className="">
      <Group className="my-5 flex flex-col items-start space-y-1">
        <Checkbox
          color="gray"
          size="xs"
          label={
            <Anchor className=" text-md text-gray-800" size="xs" href="" target="_blank">
              In Stock
            </Anchor>
          }
        />
        <Checkbox
          color="gray"
          size="xs"
          label={
            <Anchor className=" text-md text-gray-800" size="xs" href="" target="_blank">
              Pre Order
            </Anchor>
          }
        />
        <Checkbox
          color="gray"
          size="xs"
          label={
            <Anchor className=" text-md text-gray-800" size="xs" href="" target="_blank">
              Upcoming
            </Anchor>
          }
        />
      </Group>
    </Box>
  </Container>
);

export default ProductAvailability;
