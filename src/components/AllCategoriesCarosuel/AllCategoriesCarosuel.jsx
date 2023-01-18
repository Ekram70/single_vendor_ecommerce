import { Carousel } from "@mantine/carousel";
import { Container, Text } from "@mantine/core";
import React from "react";
import AllCategories from "../AllCategories/AllCategories";

const AllCategoriesCarosuel = () => {
  return (
    <Container className="my-5 max-w-[1175px]">
      <Text className="my-8 text-2xl" weight={900}>
        All Categories
      </Text>
      <Carousel
        height={250}
        slideSize="20"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "25%" },
          { maxWidth: "sm", slideSize: "50%" },
        ]}
        // slidesToScroll={8}
      >
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
        <Carousel.Slide>
          <AllCategories />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};

export default AllCategoriesCarosuel;
