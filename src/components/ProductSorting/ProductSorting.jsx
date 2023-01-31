import { Anchor, Checkbox, Container, Divider, Group, Paper, Stack, Text } from '@mantine/core';
import React from 'react';

const ProductSorting = () => (
  <Container className="min-w-[250px] rounded-md">
    <Paper withBorder className="space-y-4 p-8">
      <Group position="apart">
        <Text component="span" className="text-sm font-semibold">
          Sort
        </Text>
        <Anchor>Reset</Anchor>
      </Group>
      <Divider />
      <Stack>
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Best Selling Items</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Latest Items</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Price: Low to High</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Price: High to Low</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
      </Stack>
    </Paper>
  </Container>
);

export default ProductSorting;
