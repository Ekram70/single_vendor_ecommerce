import {
  Anchor,
  Box,
  Container,
  Divider,
  Group,
  NumberInput,
  Paper,
  RangeSlider,
  Stack,
  Text
} from '@mantine/core';
import React from 'react';

const ProductsPriceRange = () => (
  <Container className="min-w-[250px] rounded-md">
    <Paper withBorder className="space-y-4 p-8">
      <Group position="apart">
        <Text component="span" className="text-sm font-semibold">
          Price Range
        </Text>
        <Anchor>Reset</Anchor>
      </Group>

      <Divider />
      <Stack>
        <Box className="mt-8">
          <RangeSlider
            size="xs"
            labelAlwaysOn
            defaultValue={[20, 80]}
            classNames={{
              label: 'bg-primary'
            }}
          />
        </Box>

        <Group position="apart" className="gap-0">
          <Group className="gap-2">
            <Text component="span" className="text-sm">
              Min
            </Text>
            <NumberInput
              size="xs"
              variant="filled"
              min={0}
              max={100}
              hideControls
              classNames={{
                root: 'w-[35px]'
              }}
            />
          </Group>
          <Group className="gap-2">
            <Text component="span" className="text-sm">
              Max
            </Text>
            <NumberInput
              size="xs"
              variant="filled"
              min={0}
              max={100}
              hideControls
              classNames={{
                root: 'w-[35px]'
              }}
            />
          </Group>
        </Group>
      </Stack>
    </Paper>
  </Container>
);

export default ProductsPriceRange;
