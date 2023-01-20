import { Box, Group, Title } from '@mantine/core';
import React from 'react';
import productsData from '../../../data/productsData';
import ProductCards from '../ProductCards/ProductCards';

const AllProducts = () => (
  <Box component="main" className="m-12 my-8 ">
    <Group className="mb-7">
      <Title order={3} className="text-2xl">
        Explore Our Products
      </Title>
    </Group>
    <Group className="mb-7">NavBar</Group>
    <Group className="grid gap-3 lg:grid-cols-4">
      {productsData &&
        productsData.map((product) => <ProductCards product={product} key={product.id} />)}
    </Group>
  </Box>
);

export default AllProducts;
