import { Accordion, Box, Container } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import React from 'react';

const ProductQuestion = () => (
  <Container className="mb-5 mt-2">
    <Box className="space-y-5 p-4">
      <Accordion
        variant="separated"
        radius="lg"
        defaultValue="customization"
        transitionDuration={1000}
        chevron={<IconPlus size={18} />}
        styles={{
          chevron: {
            '&[data-rotate]': {
              transform: 'rotate(45deg)'
            }
          }
        }}
      >
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  </Container>
);

export default ProductQuestion;
