import { Box, Button, Container, Group, Modal, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';
import ProductAvailability from '../components/ProductAvailability/ProductAvailability';
import ProductPagination from '../components/ProductPagination/ProductPagination';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import ProductSorting from '../components/ProductSorting/ProductSorting';
import ProductsPriceRange from '../components/ProductsPriceRange/ProductsPriceRange';
import ProductSubCategories from '../components/ProductSubCategories/ProductSubCategories';

const ProductsCategories = () => {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
        <Group
          className={`my-20 ${
            !isDesktop && 'flex-col'
          } flex-nowrap items-start justify-between`}
        >
          {isDesktop ? (
            <Stack className="basis-[250px] space-y-10">
              <ProductSorting />
              <ProductAvailability />
              <ProductsPriceRange />
              <ProductSubCategories />
            </Stack>
          ) : (
            <>
              <Modal
                centered
                size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
              >
                <ProductSorting />
                <ProductAvailability />
                <ProductsPriceRange />
                <ProductSubCategories />
              </Modal>

              <Group position="center" className="w-full">
                <Button onClick={() => setOpened(true)}>Filter & Sort</Button>
              </Group>
            </>
          )}

          <Stack className="basis-[900px]">
            <ProductsGrid />
            <ProductPagination />
          </Stack>
        </Group>
      </Container>
    </Box>
  );
};

export default ProductsCategories;
