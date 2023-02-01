import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Group,
  Indicator,
  NumberInput,
  Paper,
  PasswordInput,
  Textarea,
  TextInput,
  Title
} from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons';
import React from 'react';
import userProfile from '../../assets/images/profile.png';

const AccountSettings = () => (
  <Box component="main" className="w-full px-2 pt-5 lg:basis-[78%]">
    <Box component="section" className=" my-5 grid gap-6 lg:grid-cols-2">
      <Box component="div">
        <Paper className="w-full p-5 shadow-md">
          <Group className="mb-4">
            <Indicator
              label={<IconBrandInstagram size={12} />}
              offset={7}
              size={16}
              radius="lg"
              inline
              position="bottom-end"
            >
              <Avatar size="lg" radius="xl" src={userProfile} />
            </Indicator>
          </Group>
          <form className="space-y-7">
            <TextInput
              label="Name"
              placeholder="Name"
              variant="filled"
              size="md"
              classNames={{ label: 'mb-1' }}
            />
            <TextInput
              label="Email"
              placeholder="Email"
              variant="filled"
              size="md"
              classNames={{ label: 'mb-1' }}
            />
            <NumberInput
              size="md"
              label="Phone Number"
              placeholder="phone number"
              hideControls
              variant="filled"
              classNames={{ label: 'mb-1' }}
            />
            <Textarea
              size="md"
              placeholder="shopping address"
              label="Shopping Address"
              variant="filled"
              classNames={{ label: 'mb-1' }}
            />
            <Title order={4}>Gender</Title>
            <Group>
              <Checkbox label="Male" color="gray" radius="xl" size="sm" />
              <Checkbox label="Female" color="gray" radius="xl" size="sm" />
            </Group>
            <Button className="w-full py-3">Save Changes</Button>
          </form>
        </Paper>
      </Box>
      <Box component="div">
        <Paper className="p-5 shadow-md">
          <form className="space-y-7">
            <PasswordInput
              placeholder="Password"
              variant="filled"
              size="md"
              label="Current Password"
              classNames={{ label: 'mb-1' }}
            />
            <PasswordInput
              placeholder="Password"
              variant="filled"
              size="md"
              label="New Password"
              classNames={{ label: 'mb-1' }}
            />
            <PasswordInput
              placeholder="Cofirm Password"
              variant="filled"
              size="md"
              label="Confirm Password"
              classNames={{ label: 'mb-1' }}
            />
            <Button className="my-3 w-full">Change Password</Button>
          </form>
        </Paper>
      </Box>
    </Box>
  </Box>
);

export default AccountSettings;
