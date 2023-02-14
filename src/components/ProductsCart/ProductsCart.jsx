/* eslint-disable prettier/prettier */
import {
  ActionIcon, Box, Button, Container, Divider, Grid,
  Group,
  Image,
  Paper,
  Rating, Select, Stack,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { useCounter, useMediaQuery } from '@mantine/hooks';
import { IconArrowAutofitLeft, IconArrowAutofitRight, IconChevronDown, IconMinus, IconPlus, IconReload, IconTrash } from '@tabler/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Product1 from '../../assets/images/product1.png';
import Product2 from '../../assets/images/product2.png';
import Product3 from '../../assets/images/product3.png';
import Product4 from '../../assets/images/product4.png';
import Product5 from '../../assets/images/product5.png';

const data = [
  {
    id: 1,
    name: 'Samsung 25W PD Super Fast Travel Charger USB-C',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: Product1,
    price:20.6
  },
  {
    id: 2,
    name: 'Clear Complete Soft Care Anti-Dandruff Shampoo 330ml',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: Product2,
    price:18.6
  },
  {
    id: 3,
    name: 'Garnier Men Power White Super Duo Foam 100 ml',
    username: 'ggBret',
    email: 'Sincere@april.biz',
    image: Product3,
    price:16.6
  },
  {
    id: 4,
    name: 'Bowie E2 True Wireless Earphones',
    username: 'hjtk Bret',
    email: 'Sincere@april.biz',
    image: Product4,
    price:12.0
  },
  {
    id: 5,
    name: 'Drinko Juice 250 ml',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: Product5,
    price:12.6
  }
];

const ProductsCart = () => {
    const [count, handlers] = useCounter(1, { min: 1, max: 10 });
    const isMobile = useMediaQuery('(min-width: 576px)');
  return (
    <Box className='my-5'>
      <Box>
        <Grid>
          <Grid.Col xs={9}>
             <Container>
                <Group
                position="apart"
                className="justify-end gap-0 rounded-md bg-gray-300 py-2 px-4 text-sm font-bold text-secondary"
            > 
                <Text className="w-1/2">Product</Text>
            
                <Group position="apart" className="sm:w-2/5">
                <Text>Unit Price</Text>
                <Text>Quentity</Text>
                <Text>Sub Total</Text>
                <Text>Remove</Text>
                </Group>
                </Group>
                <Box component='section'>
            {
                data.map((item)=>(
                    <Paper className="my-4 p-4" withBorder>
                    <Group position="apart" className={`${!isMobile && 'flex-col'}`}>
                    <Group className="justify-center gap-0 sm:w-1/2 sm:justify-start">
                        <Image height={120} width={150} size="lg" src={item. image} />
                        <Stack className="items-center gap-0 sm:items-start">
                        <Text className="text-center text-sm font-semibold sm:text-start">
                            Field Roast Chao Cheese Creamy Original
                        </Text>
                        <Group>
                            <Rating defaultValue={4.5} size="sm" />
                            <Text component="span" className="text-sm text-gray-400">
                            (4.5)
                            </Text>
                        </Group>
                        </Stack>
                    </Group>
                    <Group position="apart" className="sm:w-2/5">
                        <Text className="text-2xl font-semibold">${item.price}</Text>
                        <Box className='flex items-center gap-2  border-b-4 border-indigo-500'>
                            <ActionIcon><IconMinus onClick={handlers.decrement}  size={18}/></ActionIcon>
                            <ActionIcon className='text-md font-bold'>{count}</ActionIcon>
                            <ActionIcon><IconPlus onClick={handlers.increment} size={18}/></ActionIcon>
                        </Box>
                    
                        <Text  className="text-2xl font-semibold">${`${Math.round(item.price*count)}`}</Text>
                        <ActionIcon>
                        <IconTrash size={24} color='red'/>
                        </ActionIcon>
                    </Group>
                    </Group>
                     </Paper>
                ))
            }
                </Box>
                <Box className='my-5'>
                    <Group position='apart'>
                        <Button className='w-1/3'  color="indigo" leftIcon={<IconArrowAutofitLeft size={18}/>}>Continue To Shipping</Button>
                        <Button className='w-1/3'  color="indigo" leftIcon={<IconReload size={18}/>}>Update Cart</Button>
                    </Group>
                </Box>
                <Box className='lg:flex items-start justify-between my-5 gap-5'>
                    <Paper withBorder className='p-4 w-full'>
                        <Title order={4} className='my-3'>Calculate Shipping</Title>
                        <Select
                        label="Flat rate:5%"
                        placeholder="Pick one"
                        rightSection={<IconChevronDown size={14} />}
                        rightSectionWidth={30}
                        classNames={{label:'mb-2'}}
                        styles={{ rightSection: { pointerEvents: 'none' } }}
                        data={['USA', 'BD', 'ERU']}
                        />
                        <Box className='flex items-center gap-2 my-4'>
                            <TextInput className='w-1/2' placeholder='state/country'/>
                            <TextInput  className='w-1/2' placeholder='Zip Code'/>
                        </Box>

                       
                    </Paper>
                    <Paper className='p-4 w-full'>
                        <Title order={4} className='my-3'>Apply Coupon</Title>
                        <Text className='text-muted my-2'>Using A Promo Code?</Text>
                        <Box className='flex items-center gap-3'>
                        <TextInput  placeholder="Enter Your Coupon"
                            size="md"
                            withAsterisk 
                            className='w-2/3'/> 
                            <Button size="md">Apply</Button>
                        </Box>
                    </Paper>
                </Box>

             </Container>
          </Grid.Col>
          <Grid.Col xs={3}>
            <Container className='mt-9'>
            <Paper className='p-4 shadow-sm' withBorder>
                <Box className='flex items-center justify-between'>
                    <Title order={4}>Subtotal</Title>
                    <Text className='font-semibold'>$25.30</Text>
                </Box>
                <Divider className='my-3'/>
                <Box className='flex items-center justify-between'>
                    <Title order={4}>Shipping</Title>
                    <Text className='font-semibold'>$2.0</Text>
                </Box>
                <Divider className='my-3'/>
                <Box className='flex items-center justify-between'>
                    <Title order={4}>Total</Title>
                    <Text className='font-semibold'>$256</Text>
                </Box>
                <Divider className='my-3'/>
                <Button className='w-full' component={Link} to="/productscheckout" variant='outline' rightIcon={<IconArrowAutofitRight size={18}/>}>Process To CheckOut</Button>
            </Paper>
            </Container>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsCart;
