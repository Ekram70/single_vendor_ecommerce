import { Group } from '@mantine/core';
import React from 'react';
import productsData from '../../../data/productsData';
import ProductCard from '../ProductCard/ProductCard';

const ProductsGrid = () => (
  <Group position="center">
    {productsData &&
      productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
  </Group>
);

export default ProductsGrid;
