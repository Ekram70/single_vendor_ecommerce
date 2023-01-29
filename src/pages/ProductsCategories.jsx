import { Box, Container, Grid } from '@mantine/core';
import React from 'react';
import ExploreProducts from '../components/ExploreProducts/ExploreProducts';
import ProductAvailability from '../components/ProductAvailability/ProductAvailability';
import ProductPagination from '../components/ProductPagination/ProductPagination';
import ProductSorting from '../components/ProductSorting/ProductSorting';
import ProductsPriceRange from '../components/ProductsPriceRange/ProductsPriceRange';
import ProductSubCategories from '../components/ProductSubCategories/ProductSubCategories';

const ProductsCategories = () => (
  <Box>
    <Container className=" my-8 max-w-[1300px]">
      <Grid gutter="md">
        <Grid.Col xs={2.5}>
          <ProductSorting />
          <ProductAvailability />
          <ProductsPriceRange />
          <ProductSubCategories />
        </Grid.Col>
        <Grid.Col xs={9.5} className="">
          <ExploreProducts />
          <ProductPagination />
        </Grid.Col>
      </Grid>
    </Container>
  </Box>
);

export default ProductsCategories;
