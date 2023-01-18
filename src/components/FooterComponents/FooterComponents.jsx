import { ActionIcon, Box, Container, Group, Text, Title } from '@mantine/core';
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

function FooterComponents() {
  return (
    <footer className="border-t  border-gray-100 bg-[#C1C2C5] pt-16 pb-12">
      <Container className=" mx-auto grid grid-cols-3">
        <Box className="col-span-1 space-y-5">
          <Logo />
          <Box className="space-y-4">
            <Group>
              <Text className="flex items-center ">
                <IconMail size={30} className="mr-2" />
                <span>tareq@gamil.com</span>
              </Text>
            </Group>
            <Group>
              <Text className="flex items-center justify-between">
                <IconCurrentLocation size={30} className="mr-2" />
                <span>2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000</span>
              </Text>
            </Group>
          </Box>
        </Box>
        <Box className="col-span-2 grid grid-cols-2 gap-8">
          <Box className="grid grid-cols-2 gap-8">
            <Box>
              <Title className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Company
              </Title>
              <Box className="mt-4 flex flex-col space-y-4">
                <Text component="a" href="" target="_blank">
                  About Us
                </Text>
                <Text href="" component="a" target="_blank">
                  Contact Us
                </Text>
                <Text href="" component="a" target="_blank">
                  Support Center
                </Text>
                <Text href="" component="a" target="_blank">
                  Career
                </Text>
              </Box>
            </Box>
            <Box>
              <Title className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Policies
              </Title>
              <Box className="mt-4 flex flex-col space-y-4">
                <Text component="a" href="" target="_blank">
                  Terms & Conditions
                </Text>
                <Text href="" component="a" target="_blank">
                  Privacy Policy
                </Text>
                <Text href="" component="a" target="_blank">
                  Refund Policy
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="grid grid-cols-2 gap-8">
            <Box>
              <Title className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Account
              </Title>
              <Box className="mt-4 flex flex-col space-y-4">
                <Text component="a" href="" target="_blank">
                  Sign In
                </Text>
                <Text href="" component="a" target="_blank">
                  View Cart
                </Text>
                <Text href="" component="a" target="_blank">
                  My Wishlist
                </Text>
                <Text href="" component="a" target="_blank">
                  Track my order
                </Text>
              </Box>
            </Box>
            <Box>
              <Title className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Stay Connected
              </Title>
              <Box className="mt-4 space-y-4">
                <Group spacing={0} position="" grow noWrap>
                  <ActionIcon size="lg">
                    <IconBrandTwitter size={25} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon size="lg">
                    <IconBrandYoutube size={25} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon size="lg">
                    <IconBrandInstagram size={25} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon size="lg">
                    <IconBrandFacebook size={25} stroke={1.5} />
                  </ActionIcon>
                </Group>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

export default FooterComponents;
