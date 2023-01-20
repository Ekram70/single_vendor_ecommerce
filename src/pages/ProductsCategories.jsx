import { Box, Container, Grid } from '@mantine/core';
import React from 'react';
import AllProducts from '../components/AllProducts/AllProducts';
import FooterComponents from '../components/FooterComponents/FooterComponents';
import MainHeader from '../components/MainHeader/MainHeader';
import ProductAvailability from '../components/ProductAvailability/ProductAvailability';
import ProductPagination from '../components/ProductPagination/ProductPagination';
import ProductSorting from '../components/ProductSorting/ProductSorting';
import ProductsPriceRange from '../components/ProductsPriceRange/ProductsPriceRange';
import ProductSubCategories from '../components/ProductSubCategories/ProductSubCategories';

const ProductsCategories = () => (
  <>
    <MainHeader />
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
            <AllProducts />
            <ProductPagination />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>

    <FooterComponents />
  </>
);

export default ProductsCategories;
