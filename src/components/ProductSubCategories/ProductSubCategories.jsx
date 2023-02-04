import {
  Anchor,
  Checkbox,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text
} from '@mantine/core';
import React from 'react';

const ProductSubCategories = () => (
  <Container className="min-w-[250px] rounded-md">
    <Paper withBorder className="space-y-4 p-8">
      <Group position="apart">
        <Text component="span" className="text-sm font-semibold">
          Categories
        </Text>
        <Anchor>Reset</Anchor>
      </Group>

      <Divider />

      <Stack>
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Milk & Dairies</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Coffees & Teas</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Pet Foods</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Meats</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Vegetables</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Fruits</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
      </Stack>
    </Paper>
  </Container>
);

export default ProductSubCategories;
