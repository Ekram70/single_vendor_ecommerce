import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Rating,
  Slider,
  Textarea,
  Title
} from '@mantine/core';
import React from 'react';
import CustomarReviewsCard from '../CustomarReviewsCard/CustomarReviewsCard';

const SingleProductReviews = () => (
  <Container className="mb-5 mt-2">
    <Title order={4} className="mb-4 text-clip">
      Customar Reviews
    </Title>
    <Grid>
      <Grid.Col xs={8}>
        <Box>
          <Box>
            <CustomarReviewsCard />
            <CustomarReviewsCard />
            <CustomarReviewsCard />
          </Box>
          <Box>
            <Paper className="my-5 rounded-md  p-5 shadow-lg">
              <Title order={4} className="my-5">
                Add Reviews
              </Title>
              <Rating defaultValue={5} className="my-4" />
              <form className="space-y-7">
                <Textarea placeholder="Your comment" size="xl" />
                <Button className="py-3 font-medium">Submit Review</Button>
              </form>
            </Paper>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col xs={4}>
        <Box className="p-4 shadow-md">
          <Group>
            <Rating defaultValue={4.5} />
            <span>4.8 out of 5</span>
          </Group>
          <Box className="my-2">
            <Group className="my-3">
              <span>5 star</span>
              <Slider
                labelTransition="skew-down"
                labelTransitionDuration={150}
                labelTransitionTimingFunction="ease"
                color="orange"
                thumbSize={16}
                size="md"
                radius="xs"
                value={90}
                className="w-[70%]"
              />
            </Group>
            <Group className="my-3">
              <span>4 star</span>
              <Slider
                labelTransition="skew-down"
                labelTransitionDuration={150}
                labelTransitionTimingFunction="ease"
                color="orange"
                thumbSize={16}
                size="md"
                radius="xs"
                value={80}
                className="w-[70%]"
              />
            </Group>
            <Group className="my-3">
              <span>3 star</span>
              <Slider
                labelTransition="skew-down"
                labelTransitionDuration={150}
                labelTransitionTimingFunction="ease"
                color="orange"
                thumbSize={16}
                size="md"
                radius="xs"
                value={75}
                className="w-[70%]"
              />
            </Group>
            <Group className="my-3">
              <span>2 star</span>
              <Slider
                labelTransition="skew-down"
                labelTransitionDuration={150}
                labelTransitionTimingFunction="ease"
                color="orange"
                thumbSize={16}
                size="md"
                radius="xs"
                value={30}
                className="w-[70%]"
              />
            </Group>
            <Group className="my-3">
              <span>1 star</span>
              <Slider
                labelTransition="skew-down"
                labelTransitionDuration={150}
                labelTransitionTimingFunction="ease"
                color="orange"
                thumbSize={16}
                size="md"
                radius="xs"
                value={10}
                className="w-[70%]"
              />
            </Group>
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
  </Container>
);

export default SingleProductReviews;
