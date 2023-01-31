import { Center, Container, Pagination } from '@mantine/core';
import React from 'react';

const ProductPagination = () => (
  <Container className="my-12">
    <Center>
      <Pagination total={15} initialPage={10} radius="sm" position="center" />
    </Center>
  </Container>
);

export default ProductPagination;
