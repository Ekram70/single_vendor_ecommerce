import { Box, Container, List, Text, Title } from '@mantine/core';
import React from 'react';

const ProductDescription = () => (
  <Container className="mb-5 mt-2">
    <Box className="space-y-5 p-4">
      <Text className="text-justify text-sm">
        Uninhibited carnally hired played in whimpered dear gorilla koala
        depending and much yikes off acceptably flapped besides and much circa
        far over the bucolically hey{' '}
      </Text>
      <Text className="text-justify text-sm">
        mastodon goodness gnashed a jellyfish and one however because. Type Of
        Packing Bottle Color mastodon goodness gnashed a jellyfish and one
        however because. Type Of Packing Bottle Color
      </Text>
      <Box>
        <List>
          <List.Item>
            Type of Packing{' '}
            <span className="ml-5 text-sm text-orange-600">Bottle</span>
          </List.Item>
          <List.Item>
            Color <span className="ml-12 text-sm text-orange-600">Gray</span>
          </List.Item>
          <List.Item>
            Quentity Per Case{' '}
            <span className="ml-5 text-sm text-orange-600">25</span>
          </List.Item>
          <List.Item>
            Ethyl Alcohol{' '}
            <span className="ml-5 text-sm text-orange-600">100ml</span>
          </List.Item>
          <List.Item>
            Piece In One{' '}
            <span className="ml-5 text-sm text-orange-600">Carton</span>
          </List.Item>
        </List>
      </Box>
      <Box>
        <Title order={4} className="mb-3 font-medium ">
          Suggested Use
        </Title>
        <Text className="my-2 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, itaque.
        </Text>
        <Text className="my-2 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          porro?
        </Text>
      </Box>
      <Box>
        <Title order={4} className="mb-3 font-medium ">
          Other Ingredients
        </Title>
        <Text className="my-2 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, itaque.
        </Text>
        <Text className="my-2 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          porro?
        </Text>
      </Box>
      <Box>
        <Title order={4} className="mb-3 font-medium ">
          Warnings
        </Title>
        <Text className="space-y-2 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, itaque.
        </Text>
      </Box>
    </Box>
  </Container>
);

export default ProductDescription;
