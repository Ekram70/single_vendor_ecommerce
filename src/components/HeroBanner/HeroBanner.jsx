import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import React from 'react';
import bannerData from '../../../data/bannerData';

const useStyles = createStyles((theme) => ({
  card: {
    height: 368,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.dark,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}));
const Card = ({ image, title, category }) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      //   className="h-[350] object-cover"
    >
      <div>
        <Text size="xs" className={`${classes.category}`}>
          {category}
        </Text>
        <Title order={3} className={`${classes.title}`}>
          {title}
        </Title>
      </div>
    </Paper>
  );
};

const HeroBanner = () => {
  const slides = bannerData.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      className="mt-10 max-h-[368px] max-w-[1175px]"
      loop
      mx="auto"
      withIndicators
      nextControlIcon={<IconArrowRight size={20} className=" text-[#E8590C]" />}
      previousControlIcon={<IconArrowLeft size={20} className=" text-[#E8590C]" />}
      height={400}
      styles={{
        indicator: {
          width: 14,
          height: 4,
          transition: 'width 250ms ease',
          control: {
            backgroundColor: '#E8590C'
          }
        }
      }}
    >
      {slides}
    </Carousel>
  );
};

export default HeroBanner;
