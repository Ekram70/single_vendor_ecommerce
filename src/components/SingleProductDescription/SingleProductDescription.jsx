import { Box, Container, Tabs } from '@mantine/core';
import { useState } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductInformations from '../ProductInformations/ProductInformations';
import ProductQuestion from '../ProductQuestion/ProductQuestion';
import SingleProductReviews from '../SingleProductReviews/SingleProductReviews';

const SingleProductDescription = () => {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <Box component="section" className="m-auto my-20">
      <Container className="w-full max-w-[700px] py-2 lg:max-w-[1200px]">
        <Tabs
          variant="pills"
          value={activeTab}
          onTabChange={setActiveTab}
          defaultValue={activeTab}
          className="rounded-md border border-solid border-gray-300 p-2 sm:p-10"
        >
          <Tabs.List>
            <Tabs.Tab
              value="Description"
              className={`${
                activeTab !== 'Description'
                  ? 'border border-solid border-gray-300'
                  : ''
              }`}
            >
              Description
            </Tabs.Tab>
            <Tabs.Tab
              value="Additional Info"
              className={`${
                activeTab !== 'Additional Info'
                  ? 'border border-solid border-gray-300'
                  : ''
              }`}
            >
              Additional Info
            </Tabs.Tab>
            <Tabs.Tab
              value="Reviews"
              className={`${
                activeTab !== 'Reviews'
                  ? 'border border-solid border-gray-300'
                  : ''
              }`}
            >
              Reviews
            </Tabs.Tab>
            <Tabs.Tab
              value="Question"
              className={`${
                activeTab !== 'Question'
                  ? 'border border-solid border-gray-300'
                  : ''
              }`}
            >
              Question
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Description">
            <ProductDescription />
          </Tabs.Panel>

          <Tabs.Panel value="Additional Info">
            <ProductInformations />
          </Tabs.Panel>

          <Tabs.Panel value="Reviews">
            <SingleProductReviews />
          </Tabs.Panel>

          <Tabs.Panel value="Question">
            <ProductQuestion />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
};

export default SingleProductDescription;
