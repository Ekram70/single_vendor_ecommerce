import {
  ActionIcon,
  Button,
  CloseButton,
  Group,
  Image,
  Indicator,
  Menu,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";
import React from "react";
import productPic from "../../assets/images/product.png";

const Cart = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Menu>
      <Menu.Target>
        <Indicator
          label={3}
          inline
          size={18}
          classNames={{
            indicator: "text-secondary",
          }}
        >
          <ActionIcon>
            <IconShoppingCart
              className={`h-6 w-6 ${
                dark ? "stroke-primary" : "stroke-secondary"
              }`}
            />
          </ActionIcon>
        </Indicator>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component="div">
          <Group className="items-start">
            <Image src={productPic} width={50} height={50} />
            <Stack className="gap-0">
              <Text component="span">Daisy casual bag</Text>
              <Text component="span">1 x $400</Text>
            </Stack>
            <CloseButton />
          </Group>
        </Menu.Item>
        <Menu.Item component="div">
          <Group className="items-start">
            <Image src={productPic} width={50} height={50} />
            <Stack className="gap-0">
              <Text component="span">Daisy casual bag</Text>
              <Text component="span">1 x $400</Text>
            </Stack>
            <CloseButton />
          </Group>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item component="div">
          <Group position="apart">
            <Text component="span" className="text-lg font-medium ">
              Total
            </Text>
            <Text component="span" className="text-lg font-medium">
              $800
            </Text>
          </Group>
        </Menu.Item>
        <Menu.Item component="div">
          <Group position="apart">
            <Button variant="outline">View Cart</Button>
            <Button>Checkout</Button>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Cart;
