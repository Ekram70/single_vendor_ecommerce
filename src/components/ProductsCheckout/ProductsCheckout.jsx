/* eslint-disable prettier/prettier */
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  Rating,
  Select,
  Stack,
  Text, Textarea, TextInput,
  Title
} from '@mantine/core';
import { IconArrowBadgeLeft, IconArrowBadgeRight, IconChevronDown } from '@tabler/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import master from '../../assets/images/cardimage/master.png';
import paypol from '../../assets/images/cardimage/pypol.png';
import visa from '../../assets/images/cardimage/visa.png';
import Product1 from '../../assets/images/product1.png';
import Product2 from '../../assets/images/product2.png';
import Product5 from '../../assets/images/product5.png';

const ProductsCheckout = () => (
  <Box component="main" className="m-12 my-5 ">
    <Grid className=''>
      <Grid.Col xs={6}>
        <Paper withBorder className="p-4">
          <Box className="flex w-full items-center gap-2">
            <Paper className=" w-1/3  p-3" withBorder>
              <Image width={100} height={50} src={paypol} />
            </Paper>
            <Paper className=" w-1/3  p-3 " withBorder>
              <Image width={100} height={50} src={visa} />
            </Paper>
            <Paper className=" w-1/3 p-3 " withBorder>
              <Image width={100} height={50} src={master} />
            </Paper>
          </Box>
          <Divider
            size="lg"
            className="my-3"
            label="Or"
            labelPosition="center"
          />
          <Box className="my-3 flex items-center justify-between">
            <Text className="text-sm">Contact information</Text>
            <Text className="text-sm">
              Already have an account?
              <Anchor className='ml-2' href="/login" target="_blank">
                Login
              </Anchor>
            </Text>
          </Box>
          <Box className='my-2'>
            <TextInput
              radius="md"
              size="md"
              withAsterisk
              placeholder="Email"
            />
          </Box>
          <Box>
          <Checkbox
           label="Keep me up to date on news and exclusive offers"
           className='my-5'
           />
          </Box>
          <Box className='my-3'>
          <Title className='my-5' order={4}>Shipping address</Title>
              <from className="space-y-5">
                <Box className='lg:flex items-center gap-4 space-y-5 lg:space-y-0'>
                  <TextInput className='lg:w-1/2'   
                  placeholder="First name"
                  label="Full name"
                  classNames={{label:'mb-2'}}
                  withAsterisk/>
                  <TextInput className='lg:w-1/2' 
                   Placeholder="Last name"
                    label="Full name"
                    classNames={{label:'mb-2'}}
                    withAsterisk/>
                </Box>
                <Box>
                  <TextInput className='w-full'
                   placeholder="Address 1"
                   label="Address 1"
                   classNames={{label:'mb-2'}}
                   withAsterisk/>
                 
                </Box>
                <Box>
                  <TextInput className='w-full'
                   placeholder="Address 2"
                   label="Address 2"
                   classNames={{label:'mb-2'}}
                   withAsterisk/>
                </Box>
                <Box className='lg:flex items-center gap-4 space-y-5 lg:space-y-0'>
                  <Select className='lg:w-1/2'   
                        label="Select Options"
                        placeholder="Pick one"
                        rightSection={<IconChevronDown size={14} />}
                        rightSectionWidth={30}
                        styles={{ rightSection: { pointerEvents: 'none' } }}
                        data={['React', 'Angular', 'Svelte', 'Vue']}
                        classNames={{label:'mb-2'}}/>
                  <TextInput className='lg:w-1/2' 
                        laceholder="City"
                        label="City"
                        withAsterisk
                        classNames={{label:'mb-2'}}/>
                </Box>
                <Box>
                  <TextInput className='w-full'
                   placeholder="Post Code/Zip"
                   label="Post Code/Zip"
                   classNames={{label:'mb-2'}}
                   withAsterisk/>
                </Box>
                <Box>
                  <Textarea className='w-full'
                   placeholder="Aditional Information"
                   label="Aditional Information"
                   classNames={{label:'mb-2'}}
                   />
                </Box>
              </from>
          </Box>
          <Box/>
        </Paper>
        <Box className='my-5'>
          <Group position='apart'>
            <Button component={Link} to="/productscart" variant='outline' leftIcon={<IconArrowBadgeLeft size={18}/>}>
             Return cart</Button>
            <Button variant='outline'  rightIcon={<IconArrowBadgeRight size={18}/>}>Place an Order</Button>
          </Group>
        </Box>
      </Grid.Col>
      <Grid.Col xs={6}>
        <Paper  withBorder className="p-4">
                  <Paper className="my-4 p-4" withBorder>
                    <Box className='flex items-center gap-4'>
                    <Box className=" flex items-center justify-center gap-0 lg:w-2/3 sm:w-1/2 sm:justify-start">
                        <Image height={120} width={150} size="lg" src={Product5} />
                        <Stack className="items-center gap-0 sm:items-start">
                        <Text lineClamp={3} className="text-center text-sm font-semibold sm:text-start">
                            Field Roast Chao Cheese Creamy Original
                        </Text>
                        <Group>
                            <Rating defaultValue={4.5} size="sm" />
                            <Text component="span" className="text-sm text-gray-400">
                            (4.5)
                            </Text>
                        </Group>
                        </Stack>
                    </Box>
                    <Box className="sm:w-2/5 flex items-center justify-center gap-5 lg:w-1/3">
                        <Text className="text-base font-semibold">X1</Text>
                        <Text className="text-2xl font-medium ">$25.6</Text>
                    </Box>
                    </Box>
                  </Paper>
                  <Paper className="my-4 p-4" withBorder>
                    <Box className='flex items-center gap-4'>
                    <Box className=" flex items-center justify-center gap-0 lg:w-2/3 sm:w-1/2 sm:justify-start">
                        <Image height={120} width={150} size="lg" src={Product1} />
                        <Stack className="items-center gap-0 sm:items-start">
                        <Text lineClamp={3} className="text-center text-sm font-semibold sm:text-start">
                            Field Roast Chao Cheese Creamy Original
                        </Text>
                        <Group>
                            <Rating defaultValue={4.5} size="sm" />
                            <Text component="span" className="text-sm text-gray-400">
                            (4.5)
                            </Text>
                        </Group>
                        </Stack>
                    </Box>
                    <Box className="sm:w-2/5 flex items-center justify-center gap-5 lg:w-1/3">
                        <Text className="text-base font-semibold">X1</Text>
                        <Text className="text-2xl font-medium ">$25.6</Text>
                    </Box>
                    </Box>
                  </Paper>
                  <Paper className="my-4 p-4" withBorder>
                    <Box className='flex items-center gap-4'>
                    <Box className=" flex items-center justify-center gap-0 lg:w-2/3 sm:w-1/2 sm:justify-start">
                        <Image height={120} width={150} size="lg" src={Product2} />
                        <Stack className="items-center gap-0 sm:items-start">
                        <Text lineClamp={3} className="text-center text-sm font-semibold sm:text-start">
                            Field Roast Chao Cheese Creamy Original
                        </Text>
                        <Group>
                            <Rating defaultValue={4.5} size="sm" />
                            <Text component="span" className="text-sm text-gray-400">
                            (4.5)
                            </Text>
                        </Group>
                        </Stack>
                    </Box>
                    <Box className="sm:w-2/5 flex items-center justify-center gap-5 lg:w-1/3">
                        <Text className="text-base font-semibold">X1</Text>
                        <Text className="text-2xl font-medium ">$25.6</Text>
                    </Box>
                    </Box>
                  </Paper>
                  <Box className='flex items-center gap-3 my-5'>
                        <TextInput  placeholder="Enter Your Coupon"
                            size="md"
                            withAsterisk 
                            className='w-2/3'/> 
                            <Button size="md" className='w-1/3'>Apply</Button>
                        </Box>
                <Box className='flex items-center justify-between'>
                    <Title order={4} className='text-base my-3'>Subtotal</Title>
                    <Text className='font-semibold'>$25.30</Text>
                </Box>
                <Box className='flex items-center justify-between'>
                    <Title order={4}  className='text-base my-3'>Shipping</Title>
                    <Text className='font-semibold'>-</Text>
                </Box>
                <Divider className='my-3'/>
                <Box className='flex items-center justify-between'>
                    <Title order={4}>Total</Title>
                    <Text className='font-semibold'>$256</Text>
                </Box>
        </Paper>
      </Grid.Col>
    </Grid>
  </Box>
);

export default ProductsCheckout;
