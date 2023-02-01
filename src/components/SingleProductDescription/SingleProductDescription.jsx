import { Box, Container, Tabs } from '@mantine/core';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductInformations from '../ProductInformations/ProductInformations';
import ProductQuestion from '../ProductQuestion/ProductQuestion';
import SingleProductReviews from '../SingleProductReviews/SingleProductReviews';

const SingleProductDescription = () => (
  <Container className="my-4 rounded-md border-2 border-solid border-[#C1C2C5]">
    <Box component="div" className="">
      <Tabs
        color="orange"
        className="mt-4 p-4"
        variant="pills"
        radius="lg"
        defaultValue="Description"
      >
        <Tabs.List className=" rounded-sm">
          <Tabs.Tab
            className="border-gary-100 border border-solid lg:mr-4"
            value="Description"

            // icon={<IconFileDescription size={16} color="#000" />}
          >
            Description
          </Tabs.Tab>
          <Tabs.Tab
            className="border-gary-100 border border-solid lg:mr-4"
            value="Additional Info"
            // icon={<IconMessage size={16} color="#000" />}
          >
            Additional Info
          </Tabs.Tab>
          <Tabs.Tab
            className="border-gary-100 border border-solid lg:mr-4"
            value="Reviews"
            // icon={<IconRating18Plus size={16} color="#000" />}
          >
            Reviews
          </Tabs.Tab>
          <Tabs.Tab
            value="Question"
            className="border-gary-100 border border-solid lg:mr-4"

            // icon={<IconQuestionMark size={16} color="#000" />}
          >
            Question
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Description" pt="xs">
          <ProductDescription />
        </Tabs.Panel>

        <Tabs.Panel value="Additional Info" pt="xs">
          <ProductInformations />
        </Tabs.Panel>

        <Tabs.Panel value="Reviews" pt="xs">
          <SingleProductReviews />
        </Tabs.Panel>
        <Tabs.Panel value="Question" pt="xs">
          <ProductQuestion />
        </Tabs.Panel>
      </Tabs>
    </Box>
  </Container>
);

export default SingleProductDescription;
