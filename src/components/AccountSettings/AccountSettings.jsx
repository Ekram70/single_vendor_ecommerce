import {
  Avatar,
  Box,
  Button,
  FileInput,
  Group,
  PasswordInput,
  Radio,
  Textarea,
  TextInput,
  Title
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconUpload } from '@tabler/icons';
import React, { useState } from 'react';
import z from 'zod';

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'Name should have at least 3 letters' })
    .max(24, { message: 'Name should not exceed 24 letters' })
    .regex(/^[a-zA-Z\s]*$/g, { message: 'Only letters & spaces allowed' }),
  email: z.string().trim().email({ message: 'Invalid email' })
});

const AccountSettings = () => {
  const [photo, setPhoto] = useState('');

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      avatar: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      gender: ''
    }
  });

  const photoHandler = (e) => {
    setPhoto(URL.createObjectURL(e));
    form.setValues({ avatar: e });
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log(Array.from(formData));
  };

  return (
    <Box component="main" className="w-full px-2 lg:basis-[78%]">
      <Group position="apart" className="mt-5 items-start space-y-5">
        <Box component="div" className="w-full sm:w-1/2">
          <form
            className="space-y-7"
            encType="multipart/form-data"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
            <Group className="mb-4">
              <Avatar size="lg" radius="xl" src={photo} />
              <FileInput
                accept="image/png,image/jpeg"
                placeholder="Upload photo"
                icon={<IconUpload size={14} />}
                {...form.getInputProps('avatar')}
                onChange={photoHandler}
              />
            </Group>
            <TextInput
              label="Name"
              placeholder="Name"
              variant="filled"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Email"
              variant="filled"
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Phone Number"
              placeholder="phone number"
              variant="filled"
              {...form.getInputProps('phone')}
            />

            <Textarea
              placeholder="shopping address"
              label="Shopping Address"
              variant="filled"
              {...form.getInputProps('address')}
            />

            <Radio.Group
              name="favoriteFramework"
              label="Gender"
              {...form.getInputProps('gender')}
            >
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
            </Radio.Group>

            <Button type="submit" className="w-full">
              Save Changes
            </Button>
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
};

export default AccountSettings;
