/* eslint-disable prettier/prettier */
import {
  Anchor,
  Avatar,
  Box,
  Button,
  Divider,
  FileButton,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineColorScheme
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import {
  IconCalendar,
  IconMail,
  IconPhone,
  IconUpload,
  IconUser
} from '@tabler/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/profile.png';

const data = [
  { link: '', label: 'General' },
  { link: '', label: 'Moderators' },
  { link: '', label: 'Admin Account' },
  { link: '', label: 'SEO Settings' },
  { link: '', label: 'Mail Settings' },
  { link: '', label: 'Newsletter' }
];

const AdminProfileSettings = () => {
  const { colorScheme } = useMantineColorScheme();
  const [file, setFile] = useState(null);
  const dark = colorScheme === 'dark';
  const [active, setActive] = useState('Dashboard');
  const activeCss = dark ? 'bg-primary/10 text-primary/80' : 'bg-primary/40';
  const deactiveCss = dark
    ? 'text-white/50 hover:bg-secondary/50'
    : 'text-secondary/70 hover:bg-secondary/5 hover:text-black/80';
  return (
    <Box>
      <Box className="mb-12 mt-5 ml-2">
        <Title order={3} className=" text-left">
          Profile setting
        </Title>
      </Box>
      <Box>
        <Paper className="p-3">
          <Grid>
            <Grid.Col xs={3}>
              <Box component="aside" className="px-2 pt-5">
                {data &&
                  data.map((singleData, idx) => (
                    <Anchor
                      key={idx}
                      component={Link}
                      to={singleData.link}
                      onClick={() => {
                        setActive(singleData.label);
                      }}
                      className={`${
                        active === singleData.label ? activeCss : deactiveCss
                      } flex items-center rounded p-2 font-medium hover:no-underline`}
                    >
                      <Text
                        component="span"
                        className="text-md my-1 font-semibold"
                      >
                        {singleData.label}
                      </Text>
                    </Anchor>
                  ))}
              </Box>
            </Grid.Col>

            <Grid.Col xs={6}>
              <form>
                <Box
                  component="section"
                  className="my-2 mb-4 flex flex-col rounded  px-8 py-3  pt-6 shadow-sm"
                >
                  <Box component="div" className="-mx-3 mb-6 md:flex">
                    <Box className="mb-6 px-3 md:mb-0 md:w-1/2">
                      <TextInput
                        icon={<IconUser size={18} />}
                        label="First Name"
                        placeholder="John Doe"
                        withAsterisk
                        radius="md"
                        size="md"
                        //   {...form.getInputProps('name')}
                        classNames={{
                          label: 'font-semibold my-2'
                        }}
                      />
                    </Box>
                    <Box className="mb-6 px-3 md:mb-0 md:w-1/2">
                      <TextInput
                        icon={<IconUser size={18} />}
                        label="Last Name"
                        placeholder="John Doe"
                        radius="md"
                        size="md"
                        //   {...form.getInputProps('name')}
                        classNames={{
                          label: 'font-semibold my-2'
                        }}
                      />
                    </Box>
                  </Box>
                  <Box component="div" className="-mx-3 mb-6 md:flex">
                    <Box className="mb-6 px-3 md:mb-0 md:w-1/2">
                      <TextInput
                        icon={<IconMail size={18} />}
                        label="Email"
                        withAsterisk
                        className="autofocus"
                        placeholder="example@mail.com"
                        // {...form.getInputProps('email')}
                        radius="md"
                        size="md"
                        classNames={{
                          label: 'font-semibold my-2'
                        }}
                      />
                    </Box>
                    <Box className="mb-6 px-3 md:mb-0 md:w-1/2">
                      <TextInput
                        icon={<IconPhone size={18} />}
                        label="Phone Number"
                        placeholder="John Doe"
                        withAsterisk
                        radius="md"
                        size="md"
                        //   {...form.getInputProps('name')}
                        classNames={{
                          label: 'font-semibold my-2'
                        }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Textarea
                      placeholder="Your comment"
                      label="Your comment"
                      size="md"
                      radius="md"
                      //   {...form.getInputProps('name')}
                      classNames={{
                        label: 'font-semibold my-2'
                      }}
                    />
                  </Box>
                  <Box>
                    <DatePicker
                      placeholder="Pick date"
                      label="Brith Day"
                      radius="md"
                      size="md"
                      //   {...form.getInputProps('name')}
                      classNames={{
                        label: 'font-semibold my-2'
                      }}
                      icon={<IconCalendar size={16} />}
                    />
                  </Box>
                  <Group className="my-3">
                    <Button color="yellow" size="md">
                      Save Change
                    </Button>
                  </Group>
                </Box>
              </form>
            </Grid.Col>

            <Grid.Col xs={3}>
              <Box className="my-7">
                <Group position="center">
                  <Avatar
                    src={profileImage}
                    variant="outline"
                    radius="xl"
                    size="xl"
                    className="rounded-full"
                  />
                </Group>

                <Group position="center" className="my-3">
                  <FileButton
                    leftIcon={<IconUpload size={18} />}
                    onChange={setFile}
                    accept="image/png,image/jpeg"
                    variant="outline"
                  >
                    {(props) => <Button {...props}>Upload image</Button>}
                  </FileButton>
                </Group>
                {file && (
                  <Text size="sm" align="center" mt="sm">
                    Picked file: {file.name}
                  </Text>
                )}
              </Box>
              <Divider my="sm" />
            </Grid.Col>
          </Grid>
        </Paper>
        <Box className='my-5 lg:flex items-center justify-between gap-3'>
                  <Paper className='flex items-start justify-between shadow-sm p-4 gap-4 my-2'>
                    <Stack>
                      <Title order={4}>Password</Title>
                      <Text lineClamp={2} className='text-sm' component='span'>You can reset or change your password by clicking here</Text>
                    </Stack>
                    <Button variant='outline'>Change</Button>
                  </Paper>
                
                  <Paper className='flex items-start justify-between shadow-sm gap-4 p-4 my-2'>
                    <Stack>
                      <Title order={4}>Remove account</Title>
                      <Text lineClamp={2} className='text-sm' component='span'>Once you delete your account, there is no going back</Text>
                    </Stack>
                    <Button variant='outline'>Deactivate</Button>
                  </Paper>
                
        </Box>
    
      </Box>
    </Box>
  );
};

export default AdminProfileSettings;
