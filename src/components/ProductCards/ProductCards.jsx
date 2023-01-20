import { Box, Button, Group, Image, Text } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';

const ProductCards = ({ product }) => {
  // console.log(product);
  const { catPrice, image, price, category, title } = product;
  return (
    <Box
      component="div"
      className=" m-2 w-full max-w-[280px]  rounded-lg bg-white px-5 py-5 shadow-md  dark:border-gray-700 dark:bg-gray-800"
    >
      <Box>
        <Image src={image} className="m-auto" fit="contain" />
      </Box>

      <Box>
        <Group component="div">
          <span className="text-sm text-gray-600 ">{category}</span>
          <Text
            component="a"
            className="justify-center text-xl font-semibold  text-gray-900 dark:text-white"
          >
            {title}
          </Text>
        </Group>
        <Group className="my-4" position="apart" spacing="md" grow>
          <Box className="flex items-center justify-evenly space-x-2">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">${price}</span>
            <span className="text-sm text-gray-600 line-through dark:text-white">${catPrice}</span>
          </Box>

          <Button
            leftIcon={<IconShoppingCart size={18} className="text-[#000]" />}
            className="font-xl text-[#000000]"
          >
            Add
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default ProductCards;
