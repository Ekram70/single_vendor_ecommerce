import { Carousel } from '@mantine/carousel';
import { Box, Container, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import React from 'react';
import CategoriesCard from '../CategoriesCard/CategoriesCard';

const CategoriesCardCarosuel = () => (
  <Box component="section">
    <Container className="my-10 w-full max-w-[700px] py-2 lg:max-w-[1200px]">
      <Text className="mb-8 text-2xl font-bold">All Categories</Text>
      <Carousel
        loop
        align="start"
        slideGap="md"
        slideSize={130}
        controlsOffset="xl"
        controlSize={35}
        nextControlIcon={<IconArrowRight className="text-primary" />}
        previousControlIcon={<IconArrowLeft className="text-primary" />}
      >
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <CategoriesCard />
        </Carousel.Slide>
      </Carousel>
    </Container>
  </Box>
);

export default CategoriesCardCarosuel;
