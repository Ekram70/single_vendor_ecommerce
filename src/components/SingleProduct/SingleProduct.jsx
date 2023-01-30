import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  Rating,
  Text,
  Title
} from '@mantine/core';
import { IconHeart, IconShoppingCart } from '@tabler/icons';
import React, { useState } from 'react';
import productImage from '../../assets/images/product4.png';

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  return (
    <Container className="my-5">
      <Box component="div" className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {/* left section image  */}
        <Box>
          <Card className=" border border-emerald-800 shadow-md">
            <Image src={productImage} className="w-full" />
          </Card>
          <Box className="my-5 mb-6 grid grid-cols-4  gap-4 border-2">
            <Image
              src={productImage}
              className="w-full cursor-pointer border-2 border-solid border-gray-100 shadow-sm "
            />
            <Image
              src={productImage}
              className="w-full cursor-pointer border-2 border-solid border-gray-100 shadow-sm"
            />
            <Image
              src={productImage}
              className="w-full cursor-pointer border-2 border-solid  border-gray-100 shadow-sm"
            />
            <Image
              src={productImage}
              className="w-full cursor-pointer border-2 border-solid  border-gray-100 shadow-sm "
            />
          </Box>
        </Box>
        <Box component="div">
          <Badge color="yellow" className="mb-3" size="lg" radius="md" variant="filled">
            Sale off
          </Badge>
          <Title order={4} className="mb-2 font-medium uppercase">
            men ADIDAS COURTSMASH
          </Title>
          <Group className="my-3">
            <Box className=" flex items-center gap-1.5">
              <Rating defaultValue={4} />
            </Box>
            <Box component="div">
              <span className="ml-2 flex items-center text-sm text-gray-500">(32 Reviews)</span>
            </Box>
          </Group>
          <Group className="my-5">
            <Text className="text-2xl font-semibold text-[#000]">$45.00</Text>
            <Box className="flex flex-col space-y-1.5">
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
            </Box>
            <Group>
              <Text className="mt-4  text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores laudantium
                delectus perferendis deleniti excepturi non, debitis et blanditiis odio voluptate
              </Text>
            </Group>
            <Group position="apart" className="mt-6">
              <Group>
                <Button.Group>
                  <Button
                    variant="outline"
                    color="red"
                    size="md"
                    radius="xl"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </Button>
                  <Button size="md" variant="default">
                    {count}
                  </Button>
                  <Button
                    variant="outline"
                    color="red"
                    radius="xl"
                    size="md"
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </Button>
                </Button.Group>
              </Group>
              <Button radius="md" size="md" leftIcon={<IconShoppingCart size={18} color="#000" />}>
                Add to cart
              </Button>
              <Button size="md" variant="outline" color="gray" radius="xl">
                <IconHeart size={24} />
              </Button>
            </Group>
          </Group>
          <Group position="apart" className="my-3">
            <Text>
              Type : <span className="text-sm text-yellow-500">Orange</span>
            </Text>
            <Text>
              Brand : <span className="text-sm text-yellow-500">Nest</span>
            </Text>
          </Group>
          <Group position="apart" className="my-3">
            <Text>
              Tags: : <span className="text-sm text-yellow-500"> Organic, Snack, Brown</span>
            </Text>
            <Text>
              Stock:<span className="text-sm text-yellow-500"> 8 Items in Stock</span>
            </Text>
          </Group>
        </Box>
      </Box>
    </Container>
  );
};
export default SingleProduct;
