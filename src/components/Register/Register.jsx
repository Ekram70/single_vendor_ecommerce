import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  useMantineColorScheme
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import z from 'zod';
import axios from '../../api/axios';
import AuthContext from '../../context/AuthProvider';

const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, { message: 'Name should have at least 3 letters' })
      .max(24, { message: 'Name should not exceed 24 letters' })
      .regex(/^[a-zA-Z\s]*$/g, { message: 'Only letters & spaces allowed' }),
    email: z.string().trim().email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(8, { message: 'Password should have at least 8 letters' })
      .max(24, { message: 'Password should not exceed 24 letters' })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/, {
        message:
          'Password must include one uppercase, one lowercase, one number and one special character'
      }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password should have at least 8 letters' })
      .max(24, { message: 'Password should not exceed 24 letters' })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/, {
        message:
          'Password must include one uppercase, one lowercase, one number and one special character'
      })
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'Passwords did not match',
    path: ['confirmPassword']
  });

const Register = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    transformValues: (values) => ({
      name: values.name,
      email: values.email,
      password: values.password
    })
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/register', JSON.stringify(values), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });

      toast.success('Registration Successfull', {
        style: {
          borderRadius: '10px',
          background: `${dark ? '#2D2D2D' : '#FFF'}`,
          color: `${dark ? '#FFF' : '#2D2D2D'}`
        }
      });
      const { accessToken, roles } = response.data;
      setAuth({ accessToken, roles });
      form.reset();
      navigate('/');
    } catch (err) {
      if (!err?.response) {
        toast.error('No server response.', {
          style: {
            borderRadius: '10px',
            background: `${dark ? '#2D2D2D' : '#FFF'}`,
            color: `${dark ? '#FFF' : '#2D2D2D'}`
          }
        });
      } else if (err.response?.status === 409) {
        toast.error('This email is associated with another account.', {
          style: {
            borderRadius: '10px',
            background: `${dark ? '#2D2D2D' : '#FFF'}`,
            color: `${dark ? '#FFF' : '#2D2D2D'}`
          }
        });
      } else {
        toast.error('Registration failed.', {
          style: {
            borderRadius: '10px',
            background: `${dark ? '#2D2D2D' : '#FFF'}`,
            color: `${dark ? '#FFF' : '#2D2D2D'}`
          }
        });
      }
    }
  };

  return (
    <Center className="min-h-[calc(100vh-55px)] w-full p-5 sm:p-10">
      <Paper
        withBorder
        shadow="lg"
        className="w-[450px] max-w-[450px] rounded-lg p-5 text-sm sm:rounded-2xl sm:p-10"
      >
        <Title order={3} className="text-center text-xl font-bold sm:text-2xl">
          Create Your Account
        </Title>
        <Divider className="mx-auto my-2.5 h-0.5 w-44 border-0 bg-primary" />
        <form
          className="mt-11 space-y-7"
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <Box>
            <Text component="label" className="my-1 font-medium">
              Full Name
            </Text>
            <TextInput
              placeholder="John Doe"
              variant="filled"
              classNames={{
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
              }}
              {...form.getInputProps('name')}
            />
          </Box>
          <Box>
            <Text component="label" className="my-1 font-medium">
              Email
            </Text>
            <TextInput
              placeholder="john@gmail.com"
              variant="filled"
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
              placeholder="********"
              variant="filled"
              classNames={{
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
              }}
              {...form.getInputProps('password')}
            />
          </Box>
          <Box>
            <Text component="label" className="font-medium">
              Confirm Password
            </Text>
            <PasswordInput
              placeholder="********"
              variant="filled"
              classNames={{
                input: 'rounded p-2 sm:text-base placeholder-gray-400'
              }}
              {...form.getInputProps('confirmPassword')}
            />
          </Box>
          <Button type="submit" className="w-full rounded py-2 font-bold">
            Create Account
          </Button>
          <Text component="p" className="text-center">
            Already have an account?{' '}
            <Anchor component={Link} to="/login">
              Sign In
            </Anchor>
          </Text>
        </form>
      </Paper>
    </Center>
  );
};

export default Register;
