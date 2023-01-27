import { Box, Button, Paper, Text, Title } from '@mantine/core';

const SingleSlide = ({ image, title, subtitle }) => (
  <Paper
    sx={{ backgroundImage: `url(${image})` }}
    className="flex h-[300px] items-center rounded-lg bg-cover px-16 lg:h-[350px]"
  >
    <Box className="w-full space-y-5 sm:w-2/3 lg:w-1/2 lg:space-y-10">
      <Title order={3} className="text-3xl text-primary lg:text-5xl">
        {title}
      </Title>
      <Text className="text-xl font-medium text-secondary lg:text-2xl">{subtitle}</Text>
      <Button>Shop Now</Button>
    </Box>
  </Paper>
);

export default SingleSlide;
