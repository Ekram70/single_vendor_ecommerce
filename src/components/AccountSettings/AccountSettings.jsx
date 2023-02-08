import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FileInput,
  Group,
  NumberInput,
  PasswordInput,
  Text,
  Textarea,
  TextInput,
  Title
} from '@mantine/core';
import { IconUpload } from '@tabler/icons';
import React from 'react';
import userProfile from '../../assets/images/profile.png';

const AccountSettings = () => (
  <Box component="main" className="w-full px-2 lg:basis-[78%]">
    <Group position="apart" className="mt-5 items-start space-y-5">
      <Box component="div" className="w-full sm:w-1/2">
        <form className="space-y-7">
          <Group className="mb-4">
            <Avatar size="lg" radius="xl" src={userProfile} />
            <FileInput
              accept="image/png,image/jpeg"
              placeholder="Upload photo"
              icon={<IconUpload size={14} />}
            />
          </Group>
          <TextInput label="Name" placeholder="Name" variant="filled" />
          <TextInput label="Email" placeholder="Email" variant="filled" />
          <NumberInput
            label="Phone Number"
            placeholder="phone number"
            variant="filled"
            hideControls
          />
          <Textarea
            placeholder="shopping address"
            label="Shopping Address"
            variant="filled"
          />
          <Group>
            <Text component="span" className="text-sm font-bold">
              Gender
            </Text>
            <Checkbox label="Male" radius="xl" size="sm" />
            <Checkbox label="Female" radius="xl" size="sm" />
          </Group>
          <Button className="w-full">Save Changes</Button>
        </form>
      </Box>
      <Box component="div" className="w-full sm:w-2/5">
        <Title order={3} className="mb-5">
          Reset Password
        </Title>
        <form className="space-y-7">
          <PasswordInput
            placeholder="Password"
            variant="filled"
            label="Current Password"
          />
          <PasswordInput
            placeholder="Password"
            variant="filled"
            label="New Password"
          />
          <PasswordInput
            placeholder="Cofirm Password"
            variant="filled"
            label="Confirm Password"
          />
          <Button className="w-full">Change Password</Button>
        </form>
      </Box>
    </Group>
  </Box>
);

export default AccountSettings;
