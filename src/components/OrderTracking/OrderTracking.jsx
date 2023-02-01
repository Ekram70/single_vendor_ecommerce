/* eslint-disable react/no-unescaped-entities */
import { Box, Button, NumberInput, Paper, Text, Timeline, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import React from 'react';

const OrderTracking = () => (
  <Box component="main" className="my-5 w-full px-2 pt-5 lg:basis-[78%]">
    <Box component="section" className="grid gap-6 lg:grid-cols-2">
      <Box component="div" className="p-4">
        <Title order={3}>Orders Tracking</Title>
        <Text className="my-2 text-left font-medium">
          To Track your order please enter your Order Id in the box below and press “Track” button.
        </Text>
        <Paper className="p-5">
          <form className="space-y-7">
            <NumberInput
              size="md"
              label="Order Id"
              placeholder="Order Id"
              hideControls
              variant="filled"
              classNames={{ label: 'mb-1' }}
            />
            <Button className="w-full" size="md">
              Track
            </Button>
          </form>
        </Paper>
      </Box>
      <Box component="div">
        <Paper>
          <Timeline active={0} bulletSize={24} lineWidth={4}>
            <Timeline.Item bullet={<IconCheck size={18} />} title="Order Received">
              <Text color="dimmed" size="sm">
                Your order has been received and is being processed. Thank you for choosing{' '}
                <span className="text-green-500">Shoppers</span>
              </Text>
              <Text size="xs" mt={4}>
                2 hours ago
              </Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconCheck size={18} />} title="Order Confirmed">
              <Text color="dimmed" size="sm">
                Your order has been confirmed and is being prepared for shipment. We'll keep you
                updated on its progress
              </Text>
              <Text size="xs" mt={4}>
                52 minutes ago
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Shipment in Progress" bullet={<IconCheck size={18} />}>
              <Text color="dimmed" size="sm">
                Your order has been shipped and is on its way to you! You'll receive an update with
                a tracking number soon
              </Text>
              <Text size="xs" mt={4}>
                34 minutes ago
              </Text>
            </Timeline.Item>

            <Timeline.Item title="Out for Delivery" bullet={<IconCheck size={18} />}>
              <Text color="dimmed" size="sm">
                Your order is now out for delivery and should arrive at your door today. We can't
                wait for you to enjoy your purchase!"
              </Text>
              <Text size="xs" mt={4}>
                12 minutes ago
              </Text>
            </Timeline.Item>
            <Timeline.Item title="Delivered" bullet={<IconCheck size={18} />}>
              <Text color="dimmed" size="sm">
                Your order has been delivered! We hope you're enjoying your purchase. Thank you for
                choosing <span className="text-green-500">Shoppers</span>
              </Text>
              <Text size="xs" mt={4}>
                5 minutes ago
              </Text>
            </Timeline.Item>
          </Timeline>
        </Paper>
      </Box>
    </Box>
  </Box>
);

export default OrderTracking;
