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

const ProductAvailability = () => (
  <Container className="min-w-[250px] rounded-md">
    <Paper withBorder className="space-y-4 p-8">
      <Group position="apart">
        <Text component="span" className="text-sm font-semibold">
          Availability
        </Text>
        <Anchor>Reset</Anchor>
      </Group>

      <Divider />

      <Stack>
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">In Stock</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Pre Order</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
        <Checkbox
          size="xs"
          label={<Text className="text-sm font-semibold">Upcoming</Text>}
          classNames={{
            body: 'items-center'
          }}
        />
      </Stack>
    </Paper>
  </Container>
);

export default ProductAvailability;
