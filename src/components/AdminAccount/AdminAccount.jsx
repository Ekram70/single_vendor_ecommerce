/* eslint-disable prettier/prettier */
import {
    Anchor,
    Box,
    Button,
    Center,
    Checkbox,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconBrandFacebook, IconBrandGoogle } from '@tabler/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import z from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string()
});

const AdminAccount = () => {
  //   const { colorScheme } = useMantineColorScheme();
  //   const dark = colorScheme === 'dark';

  //   const { setAuth } = useAuth();
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || '/';

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });
  return (
    <Center className="min-h-[calc(100vh-55px)] w-full p-5 sm:p-10">
      <Paper
        withBorder
        shadow="lg"
        className="w-[450px] max-w-[450px] rounded-lg p-5 text-sm sm:rounded-2xl sm:p-10"
      >
        <Title order={3} className="text-center text-xl font-bold sm:text-2xl">
        Sign in
        </Title>
        <Divider className="my-2.5 mx-auto h-0.5 w-44 border-0 bg-primary" />
        <form
          className="mt-11 space-y-7"
          //   onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <Box>
            <Text component="label" className="font-medium">
              Email
            </Text>
            <TextInput
              variant="filled"
              placeholder="john@gmail.com"
              classNames={{
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
              }}
              {...form.getInputProps('email')}
            />
          </Box>
          <Box>
            <Text component="label" className="font-medium">
              Password
            </Text>
            <PasswordInput
              variant="filled"
              placeholder="********"
              classNames={{
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
              }}
              {...form.getInputProps('password')}
            />
          </Box>

          <Group position="apart" className="items-start">
            <Checkbox
              label="Remember Me"
              size="xs"
              classNames={{
                label: 'pl-2 font-medium text-xs sm:text-sm',
                body: 'items-center'
              }}
              {...form.getInputProps('rememberMe', { type: 'checkbox' })}
            />

            <Text
              component={Link}
              to="/forget"
              className="text-xs font-medium sm:text-sm"
            >
              Forget Password
            </Text>
          </Group>

          <Button type="submit" className="w-full rounded py-2 font-bold">
            Login
          </Button>
          <Text className='text-muted text-center'>Or Sign up with</Text>
          <Divider className="mx-auto h-0.5 w-44 border-0 bg-teal-500" />
          <Box className='space-y-4'>
            <Button fullWidth variant="outline"  color="teal" leftIcon={<IconBrandGoogle size={20} className="text-yellow-600"/>}>Google Login</Button>
            <Button fullWidth variant="outline"  color="teal" leftIcon={<IconBrandFacebook size={20} className="text-yellow-600" />}>Facebook Login</Button>
          </Box>
          <Text component="p" className="text-center">
            Don&rsquo;t have an account?{' '}
            <Anchor component={Link} to="/register">
              Sign Up
            </Anchor>
          </Text>
        </form>
      </Paper>
    </Center>
  );
};

export default AdminAccount;
