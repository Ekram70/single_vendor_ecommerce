import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import React from 'react';
import bannerData from '../../../data/bannerData';
import SingleSlide from '../SingleSlide/SingleSlide';

const HeroBanner = () => {
  const slides = bannerData.map((item) => (
    <Carousel.Slide key={item.id}>
      <SingleSlide image={item.image} title={item.title} subtitle={item.subtitle} />
    </Carousel.Slide>
  ));

  return (
    <Box>
      <Carousel
        loop
        align="start"
        slideGap="md"
        withIndicators
        controlsOffset="xl"
        controlSize={35}
        nextControlIcon={<IconArrowRight className="text-primary" />}
        previousControlIcon={<IconArrowLeft className="text-primary" />}
        className="mx-auto w-full max-w-[700px] py-10 px-4 lg:max-w-[1200px]"
      >
        {slides}
      </Carousel>
    </Box>
  );
};

export default HeroBanner;
