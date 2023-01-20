import { Center, Container, Pagination } from '@mantine/core';
import React from 'react';

const ProductPagination = () => (
  <Container className="my-12 ">
    <Center>
      <Pagination
        className="rounded-2xl bg-[#F0F0F0] p-4"
        total={15}
        initialPage={10}
        radius="md"
        position="center"
        styles={(theme) => ({
          item: {
            '&[data-active]': {
              backgroundImage: theme.fn.gradient({
                from: 'red',
                to: 'yellow'
              })
            }
          }
        })}
      />
    </Center>
  </Container>
);

export default ProductPagination;
