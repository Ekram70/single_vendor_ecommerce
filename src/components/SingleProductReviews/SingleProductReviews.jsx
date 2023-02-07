import {
  Box,
  Button,
  Group,
  Paper,
  Progress,
  Rating,
  Stack,
  Text,
  Textarea,
  Title
} from '@mantine/core';
import React from 'react';
import CustomarReviewsCard from '../CustomarReviewsCard/CustomarReviewsCard';

const SingleProductReviews = () => (
  <Box className="mt-5 space-y-20 text-sm">
    <Group position="apart" className="items-start gap-0">
      <Box className="lg:w-3/5">
        <Title order={4} className="mb-4">
          Customar Reviews
        </Title>
        <CustomarReviewsCard />
        <CustomarReviewsCard />
        <CustomarReviewsCard />
      </Box>
      <Stack className="w-full lg:w-auto">
        <Box>
          <Title order={4} className="my-5">
            Customer Reviews
          </Title>
          <Group>
            <Rating fractions={2} defaultValue={4.5} />
            <span>4.8 out of 5</span>
          </Group>
          <Box className="my-2">
            <Group className="my-3">
              <Text component="span" className="text-gray-500">
                5 star
              </Text>
              <Progress value={50} className="w-[250px]" />
            </Group>
            <Group className="my-3">
              <Text component="span" className="text-gray-500">
                4 star
              </Text>
              <Progress value={30} className="w-[250px]" />
            </Group>
            <Group className="my-3">
              <Text component="span" className="text-gray-500">
                3 star
              </Text>
              <Progress value={70} className="w-[250px]" />
            </Group>
            <Group className="my-3">
              <Text component="span" className="text-gray-500">
                2 star
              </Text>
              <Progress value={20} className="w-[250px]" />
            </Group>
            <Group className="my-3">
              <Text component="span" className="text-gray-500">
                1 star
              </Text>
              <Progress value={10} className="w-[250px]" />
            </Group>
          </Box>
        </Box>
        <Box>
          <Paper className="my-5 rounded-md">
            <Title order={4} className="my-5">
              Add a review
            </Title>
            <Rating defaultValue={5} size="xs" className="my-4" />
            <form className="space-y-7">
              <Textarea placeholder="Write Comment" minRows={4} autosize />
              <Button className="py-3 font-medium">Submit Review</Button>
            </form>
          </Paper>
        </Box>
      </Stack>
    </Group>
  </Box>
);

export default SingleProductReviews;
