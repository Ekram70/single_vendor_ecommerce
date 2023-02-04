import { Badge, Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';

const ProductCards = ({ product }) => {
  const { catPrice, image, price, category, title } = product;
  return (
    <Card className="max-w-[280px] rounded-md p-5 shadow-md" withBorder>
      <Group position="right">
        <Badge color="red">New</Badge>
      </Group>

      <Card.Section>
        <Image src={image} width={250} className="mx-auto" />
      </Card.Section>

      <Stack>
        <Text component="span" c="dimmed" className="text-xs">
          {category}
        </Text>
        <Text component="a" lineClamp={2} className="text-lg font-bold">
          {title}
        </Text>
      </Stack>

      <Group position="apart" className="my-5">
        <Group className="gap-3">
          <Text component="span" className="text-2xl font-bold">
            ${price}
          </Text>
          <Text component="span" c="dimmed" className="text-md line-through">
            ${catPrice}
          </Text>
        </Group>

        <Button
          leftIcon={<IconShoppingCart size={18} />}
          className="text-md text-secondary"
        >
          Add
        </Button>
      </Group>
    </Card>
  );
};

export default ProductCards;
