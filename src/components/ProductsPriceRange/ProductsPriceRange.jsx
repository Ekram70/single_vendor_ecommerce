import { Box, Container, Divider, Group, RangeSlider, Text } from '@mantine/core';
import React from 'react';

const ProductsPriceRange = () => (
  <Container className=" my-4 rounded-lg px-7 py-8 shadow-lg outline  outline-2 outline-offset-2 outline-[#C1C2C5] hover:outline-2 hover:outline-offset-2 hover:outline-green-400">
    <Box className=" ">
      <Group position="apart" className="mb-4">
        <Text className="font-semibold">Price Range</Text>
        <Text className="font-semibold text-[#FEB511]">Reset</Text>
      </Group>
    </Box>
    <Divider className="mb-2" size="sm" width="100%" />
    <Box className="my-5">
      <Box className="mb-10 mt-12 w-full">
        <RangeSlider
          color="dark"
          size="xs"
          radius="xs"
          labelAlwaysOn
          defaultValue={[20, 80]}
          //   marks={marks}
          styles={{
            label: { backgroundColor: '#FEB511' }
          }}
        />
      </Box>
      <Group position="apart" className="my-8">
        <Text className="flex items-center justify-start">
          Max{' '}
          <span>
            <input
              type="text"
              className="ml-2 h-6 w-9 rounded-sm border-0 bg-slate-400  outline-none"
            />
          </span>
        </Text>
        <Text className="flex items-center justify-start">
          Min{' '}
          <span>
            <input
              type="text"
              className="ml-2 h-6 w-9 rounded-sm border-0 bg-slate-400  outline-none"
            />
          </span>
        </Text>
      </Group>
    </Box>
  </Container>
);

export default ProductsPriceRange;
