import { ActionIcon, Box, Container, Flex, Footer, Group, Stack, Text, Title } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCurrentLocation,
  IconMail
} from '@tabler/icons';
import React from 'react';
import Logo from '../Logo/Logo';

const MainFooter = () => (
  <Footer>
    <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
      <Flex position="apart" className="items-start justify-between py-6" wrap="wrap">
        <Box className="mb-4 space-y-3 sm:w-1/3 lg:w-1/4">
          <Logo width={80} />
          <Text className="flex items-center">
            <Group className="flex">
              <IconMail size={25} className="mr-2" />
            </Group>
            <Text component="span" className="text-sm font-medium">
              tareq@gmail.com
            </Text>
          </Text>
          <Text className="flex items-center">
            <Group>
              <IconCurrentLocation size={25} className="mr-2" />
            </Group>
            <Text component="span" className="text-sm font-medium">
              2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000
            </Text>
          </Text>
        </Box>
        <Box className="mb-4 w-1/2 sm:w-2/5 lg:w-1/6">
          <Title order={6} className="mb-4 text-sm font-bold">
            Company
          </Title>
          <Stack className="gap-1">
            <Text component="a" className="text-sm font-medium">
              About Us
            </Text>
            <Text component="a" className="text-sm font-medium">
              Contact Us
            </Text>
            <Text component="a" className="text-sm font-medium">
              Support Center
            </Text>
            <Text component="a" className="text-sm font-medium">
              Career
            </Text>
          </Stack>
        </Box>
        <Box className="mb-4 w-1/2 sm:w-2/5 lg:w-1/6">
          <Title order={6} className="mb-4 text-sm font-bold">
            Policies
          </Title>
          <Stack className="gap-1">
            <Text component="a" className="text-sm font-medium">
              Terms & Conditions
            </Text>
            <Text component="a" className="text-sm font-medium">
              Privacy Policy
            </Text>
            <Text component="a" className="text-sm font-medium">
              Refund Policy
            </Text>
          </Stack>
        </Box>
        <Box className="mb-4 w-1/2 sm:w-2/5 lg:w-1/6">
          <Title order={6} className="mb-4 text-sm font-bold">
            Account
          </Title>
          <Stack className="gap-1">
            <Text component="a" className="text-sm font-medium">
              Sign In
            </Text>
            <Text component="a" className="text-sm font-medium">
              View Cart
            </Text>
            <Text component="a" className="text-sm font-medium">
              My Wishlist
            </Text>
            <Text component="a" className="text-sm font-medium">
              Track my order
            </Text>
          </Stack>
        </Box>
        <Box className="mb-4 w-1/2 sm:w-2/5 lg:w-1/6">
          <Title order={6} className="mb-4 text-sm font-bold">
            Stay Connected
          </Title>
          <Group className="gap-0">
            <ActionIcon variant="subtle" color="blue" size="lg">
              <IconBrandTwitter size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="red" size="lg">
              <IconBrandYoutube size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="pink" size="lg">
              <IconBrandInstagram size={25} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="blue" size="lg">
              <IconBrandFacebook size={25} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Box>
      </Flex>
    </Container>
    <Box className="flex h-12 items-center justify-center bg-primary text-center text-secondary">
      <Text component="span" className="text-xs font-bold">
        &copy; 2023 Shoppers.com
      </Text>
    </Box>
  </Footer>
);

export default MainFooter;
