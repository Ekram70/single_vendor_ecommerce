import { Box, List, Text, Title } from '@mantine/core';
import React from 'react';

const ProductDescription = () => (
  <Box className="mt-5 space-y-5 text-sm">
    <Box>
      <Text className="my-5 text-justify">
        Uninhibited carnally hired played in whimpered dear gorilla koala
        depending and much yikes off far quetzal goodness and from for grimaced
        goodness unaccountably and meadowlark near unblushingly crucial scallop
        tightly neurotic hungrily some and dear furiously this apart.
      </Text>
      <Text className="my-5 text-justify">
        Spluttered narrowly yikes left moth in yikes bowed this that grizzly
        much hello on spoon-fed that alas rethought much decently richly and wow
        against the frequent fluidly at formidable acceptably flapped besides
        and much circa far over the bucolically hey precarious goldfinch
        mastodon goodness gnashed a jellyfish and one however because.
      </Text>
    </Box>
    <Box>
      <List className="text-sm">
        <List.Item>Type of Packing: Bottle</List.Item>
        <List.Item>Color: Gray</List.Item>
        <List.Item>Quentity Per Case: 25</List.Item>
        <List.Item>Ethyl Alcohol: 100ml</List.Item>
        <List.Item>Piece In One: Carton</List.Item>
      </List>
      <Text className="my-5 text-justify">
        Laconic overheard dear woodchuck wow this outrageously taut beaver hey
        hello far meadowlark imitatively egregiously hugged that yikes minimally
        unanimous pouted flirtatiously as beaver beheld above forward energetic
        across this jeepers beneficently cockily less a the raucously that magic
        upheld far so the this where crud then below after jeez enchanting
        drunkenly more much wow callously irrespective limpet.
      </Text>
    </Box>
    <Box>
      <Title order={4} className="mb-3 font-medium ">
        Suggested Use
      </Title>
      <Text className="text-justify">Refrigeration not necessary.</Text>
      <Text className="text-justify">Stir before serving.</Text>
    </Box>
    <Box>
      <Title order={4} className="mb-3 font-medium ">
        Other Ingredients
      </Title>
      <Text className="text-justify">
        Organic raw pecans, organic raw cashews.
      </Text>
      <Text className="text-justify">
        This butter was produced using a LTG (Low Temperature Grinding) process
      </Text>
      <Text className="text-justify">
        Made in machinery that processes tree nuts but does not process peanuts,
        gluten, dairy or soy
      </Text>
    </Box>
    <Box>
      <Title order={4} className="mb-3 font-medium ">
        Warnings
      </Title>
      <Text className="text-justify">
        Oil separation occurs naturally. May contain pieces of shell.
      </Text>
    </Box>
  </Box>
);

export default ProductDescription;
