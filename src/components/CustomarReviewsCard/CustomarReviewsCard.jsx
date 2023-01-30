import { Avatar, Card, Container, Group, Paper, Rating, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import profileImage from '../../assets/images/profile.png';

const CustomarReviewsCard = () => (
  <Container className="my-5">
    <Paper className="rounded-md shadow-lg">
      <Card className=" flex items-center gap-7 p-5">
        <Stack>
          <Avatar radius="xl" size="lg" src={profileImage} />
          <Title order={6} className="text-sm text-yellow-400">
            Nmae
          </Title>
        </Stack>
        <Stack>
          <Group position="apart">
            <Text className="text-clip">Date</Text>
            <Rating defaultValue={5} />
          </Group>
          <Text className="text-clip text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum odit excepturi
            voluptatem a maxime facilis est dolorum eius nobis veniam.
          </Text>
        </Stack>
      </Card>
    </Paper>
  </Container>
);

export default CustomarReviewsCard;
