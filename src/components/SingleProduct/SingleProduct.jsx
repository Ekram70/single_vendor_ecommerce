import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Image,
  NumberInput,
  Paper,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Title
} from '@mantine/core';
import { useCounter, useMediaQuery } from '@mantine/hooks';
import {
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingCart
} from '@tabler/icons';
import React from 'react';
import productImage from '../../assets/images/product4.png';

const SingleProduct = () => {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <Box component="section" className="m-auto my-20">
      <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
        <Group
          position="apart"
          className={`gap-8 ${
            isDesktop && 'flex-nowrap'
          } items-start justify-center`}
        >
          <Stack>
            <Paper className="rounded-lg" withBorder>
              <Image
                src={productImage}
                fit="contain"
                className="max-w-[350px]"
              />
            </Paper>
            <Group position="apart" className="gap-0">
              <Paper className="rounded-md" withBorder>
                <Image
                  src={productImage}
                  width={70}
                  height={70}
                  fit="contain"
                />
              </Paper>
              <Paper className="rounded-md" withBorder>
                <Image
                  src={productImage}
                  width={70}
                  height={70}
                  fit="contain"
                  className="border border-solid border-secondary/10"
                />
              </Paper>
              <Paper className="rounded-md" withBorder>
                <Image
                  src={productImage}
                  width={70}
                  height={70}
                  fit="contain"
                  className="border border-solid border-secondary/10"
                />
              </Paper>
              <Paper className="rounded-md" withBorder>
                <Image
                  src={productImage}
                  width={70}
                  height={70}
                  fit="contain"
                  className="border border-solid border-secondary/10"
                />
              </Paper>
            </Group>
          </Stack>
          <Box component="div" className={`${isDesktop && 'max-w-[65%]'}`}>
            <Badge
              color="yellow"
              className="mb-3"
              size="lg"
              radius="lg"
              variant="outline"
            >
              Sale off
            </Badge>
            <Title order={4} className="mb-2 text-3xl font-bold">
              Seed of Change Organic Food
            </Title>
            <Group className="my-3">
              <Rating defaultValue={4} />
              <Text component="span" className="text-sm text-gray-500">
                (32 Reviews)
              </Text>
            </Group>
            <Group className="my-5">
              <Text className="text-4xl font-bold">$45.00</Text>
              <Stack>
                <Badge color="gray" size="sm" variant="gradient">
                  32% off
                </Badge>
                <Badge
                  color="gray"
                  size="sm"
                  className="text-base font-semibold text-gray-300 line-through"
                >
                  $15.00
                </Badge>
              </Stack>

              <Text className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </Text>

              <Group className="mt-6">
                <Group>
                  <Button.Group>
                    <Button
                      variant="default"
                      onClick={handlers.decrement}
                      className="h-[42px] w-[54px] text-center"
                    >
                      <IconMinus />
                    </Button>
                    <NumberInput
                      hideControls
                      radius={0}
                      value={count}
                      onChange={(val) => handlers.set(val)}
                      classNames={{
                        input: 'w-[54px] h-[42px] text-center font-bold text-xl'
                      }}
                    />
                    <Button
                      variant="default"
                      onClick={handlers.increment}
                      className="h-[42px] w-[54px] text-center"
                    >
                      <IconPlus />
                    </Button>
                  </Button.Group>
                </Group>
                <Button
                  radius="md"
                  size="md"
                  leftIcon={<IconShoppingCart size={18} color="white" />}
                >
                  Add to cart
                </Button>
                <Button
                  size="md"
                  variant="default"
                  color="gray"
                  className="p-2"
                >
                  <IconHeart size={24} />
                </Button>
              </Group>
            </Group>
            <SimpleGrid className="my-3 max-w-[500px] sm:grid-cols-2">
              <Text className="text-sm">
                Type:{' '}
                <Text component="span" className="text-primary">
                  Orange
                </Text>
              </Text>
              <Text className="text-sm">
                Brand:{' '}
                <Text component="span" className="text-primary">
                  Nest
                </Text>
              </Text>
              <Text className="text-sm">
                Tags:{' '}
                <Text component="span" className="text-primary">
                  Organic, Snack, Brown
                </Text>
              </Text>
              <Text className="text-sm">
                Stock:{' '}
                <Text component="span" className="text-primary">
                  8 Items in Stock
                </Text>
              </Text>
            </SimpleGrid>
          </Box>
        </Group>
      </Container>
    </Box>
  );
};
export default SingleProduct;
