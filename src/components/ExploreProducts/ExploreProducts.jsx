import { Box, Container, Group, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

const ExploreProducts = () => (
  <Box component="section">
    <Container className="my-10 w-full max-w-[700px] py-2 lg:max-w-[1200px]">
      <Group position="apart" className="mb-4 items-start">
        <Text className="text-2xl font-bold">Explore Our Products</Text>
        <Group className="mb-10 gap-y-0 md:gap-y-5">
          <Text component={Link}>All</Text>
          <Text component={Link}>Milks & Dairies</Text>
          <Text component={Link}>Coffees & Teas</Text>
          <Text component={Link}>Pet Foods</Text>
          <Text component={Link}>Meats</Text>
          <Text component={Link}>Vegetables</Text>
          <Text component={Link}>Fruits</Text>
        </Group>
      </Group>

      <ProductsGrid />
    </Container>
  </Box>
);

export default ExploreProducts;
