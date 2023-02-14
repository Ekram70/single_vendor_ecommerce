/* eslint-disable prettier/prettier */
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FileButton,
    Grid,
    Group, Image, NumberInput,
    Paper,
    Select,
    Textarea,
    TextInput,
    Title
} from '@mantine/core';
import { IconChevronDown, IconUpload } from '@tabler/icons';
import React from 'react';

const AddNewProducts = () => (
  <Box>
    <Box className="my-7 flex items-center justify-between">
      <Title order={3}>Add New Product</Title>
      <Group position="apart">
        <Button variant="outline">Save to Draft</Button>
        <Button>Public</Button>
      </Group>
    </Box>
    <Box>
      <Grid>
        <Grid.Col xs={8}>
          <Paper className="p-5 my-7">
            <Title order={4}>Basice</Title>
            <Divider size="xs" className="my-2.5" />
            <form className="space-y-7">
              <Box>
                <TextInput
                  placeholder="Type Here"
                  label="Product Title"
                  variant="filled"
                  size="md"
                  classNames={{label:'mb-2 text-medium'}}
                />
              </Box>
              <Box>
                <Textarea
                  placeholder="Type Here"
                  label="Full Description"
                  variant="filled"
                  classNames={{label:'mb-2 text-medium'}}
                  size="md"
                />
              </Box>
              <Box>
                <Box className='lg:flex items-center gap-2'>
                <NumberInput  placeholder="$"
                  label="Regular price"
                  variant="filled"
                  hideControls
                  className='lg:w-1/3'
                  size="md"
                  classNames={{label:'mb-2 text-medium'}}/>
                <NumberInput  placeholder="$"
                  label="Promotional price"
                  variant="filled"
                  size="md"
                  className='lg:w-1/3 my-2'
                  hideControls
                  classNames={{label:'mb-2 text-medium'}}/>
                   <Select
                    label="Currency"
                    variant="filled"
                    size="md"
                    className='lg:w-1/3 my-2'
                    placeholder="Type Here"
                    rightSection={<IconChevronDown size={14} />}
                    rightSectionWidth={20}
                    classNames={{label:'mb-2 text-medium'}}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['USD', 'RUBL', 'EUR',]}/>
                </Box>
              </Box>
              <Box>
                <TextInput
                  placeholder="%"
                  label="Tax rate"
                  variant="filled"
                  classNames={{label:'mb-2 text-medium'}}
                  size="md"
                />
              </Box>
              <Group >
              <Checkbox
                label="Make a template"
                color="dark"
                className='mb-8 '
               />
              </Group>

            </form>
          </Paper>
          <Paper className="p-5 my-7">
            <Title order={4}>Shipping</Title>
            <Divider size="xs" className="my-2.5" />
            <form className="space-y-7">
              <Box>
                <Box className='lg:flex items-center gap-2' position=''>
                <TextInput  placeholder="inch"
                  label="Width"
                  variant="filled"
                  hideControls
                  className='lg:w-2/3'
                  size="md"
                  classNames={{label:'mb-2 text-medium'}}/>
                <TextInput  placeholder="inch"
                  label="Height"
                  variant="filled"
                  size="md"
                  className='lg:w-2/3 my-2'
                  hideControls
                  classNames={{label:'mb-2 text-medium'}}/>
                </Box>
              </Box>
              <Box>
                <NumberInput
                  placeholder="gam"
                  label="Weight"
                  hideControls
                  variant="filled"
                  classNames={{label:'mb-2 text-medium'}}
                  size="md"
                />
              </Box>
              <Box>
                <NumberInput
                  placeholder="$"
                  label="Shipping fees"
                  hideControls
                  variant="filled"
                  classNames={{label:'mb-2 text-medium'}}
                  size="md"
                />
              </Box>
            </form>
          </Paper>
        </Grid.Col>
        <Grid.Col xs={4}>
        <Paper className="p-5 my-7">
        <Title order={4}>Media</Title>
        <Divider size="xs" className="my-2.5" />
            <Box className='flex flex-col items-center gap-5'>
            <Image
            height={100}
            width={200}
            size="xl"
        />
            <Group position='apart'>
                        <FileButton
                            leftIcon={<IconUpload size={18} />}
                            // onChange={setFile}
                            accept="image/png,image/jpeg"
                            variant="outline"
                        >
                            {(props) => <Button {...props}>File Upload</Button>}
                        </FileButton>
                        <FileButton
                            leftIcon={<IconUpload size={18} />}
                            // onChange={setFile}
                            accept="image/png,image/jpeg"
                            variant="outline"
                        >
                            {(props) => <Button {...props}>No Upload</Button>}
                        </FileButton>
            </Group>
            </Box>
        </Paper>
        <Paper className="p-5 my-7">
        <Title order={4}>Organization</Title>
        <Divider size="xs" className="my-2.5" />
        <form className='space-y-6 py-3'>
            <Box className='lg:flex items-center gap-2 justify-between'>
                   <Select
                    label="Category"
                    variant="filled"
                    size="md"
                    className='lg:w-2/3 my-2'
                    placeholder="Type Here"
                    rightSection={<IconChevronDown size={14} />}
                    rightSectionWidth={20}
                    classNames={{label:'mb-2 text-medium'}}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['USD', 'RUBL', 'EUR',]}/>
                   <Select
                    label="Sub Category"
                    variant="filled"
                    size="md"
                    className='lg:w-2/3 my-2'
                    placeholder="Type Here"
                    rightSection={<IconChevronDown size={14} />}
                    rightSectionWidth={20}
                    classNames={{label:'mb-2 text-medium'}}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={['USD', 'RUBL', 'EUR',]}/>
            </Box>
            <Box>
            <TextInput
                  placeholder="Type Here"
                  label="Tags"
                  variant="filled"
                  size="md"
                  classNames={{label:'mb-2 text-medium'}}
                />
            </Box>


        </form>
         
        </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  </Box>
);

export default AddNewProducts;
