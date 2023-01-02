import {
  Anchor,
  Button,
  ChevronIcon,
  Container,
  Group,
  HoverCard,
  Menu,
  Navbar,
  NavLink,
  Stack,
  Title,
} from "@mantine/core";
import React from "react";
import categories from "../../../data/categories";

const MainNavbar = () => {
  return (
    <Navbar>
      <Container className="w-full max-w-[1200px] py-2">
        <Group position="apart">
          <Menu width="target" shadow="md">
            <Menu.Target>
              <Button className="text-secondary" rightIcon={<ChevronIcon />}>
                Browse All Categories
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {categories &&
                categories.map((category, idx) => (
                  <NavLink key={idx} label={category.label}>
                    {category.subCategories &&
                      category.subCategories.map((subCategory, idx) => (
                        <NavLink key={idx} label={subCategory.label}>
                          {subCategory.subSubCategories &&
                            subCategory.subSubCategories.map(
                              (subSubCategory, idx) => (
                                <NavLink key={idx} label={subSubCategory} />
                              )
                            )}
                        </NavLink>
                      ))}
                  </NavLink>
                ))}
            </Menu.Dropdown>
          </Menu>

          <Group>
            <Anchor>Deals & Offers</Anchor>
            {categories &&
              categories.map((category, idx) => {
                if (category.subCategories) {
                  return (
                    <HoverCard key={idx}>
                      <HoverCard.Target>
                        <Anchor>
                          {category.label} <ChevronIcon />
                        </Anchor>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Group position="apart" className="items-start gap-10">
                          {category.subCategories &&
                            category.subCategories.map((subCategory, idx) => {
                              if (subCategory.subSubCategories) {
                                return (
                                  <Stack key={idx} className="gap-0.5">
                                    <Title order={6} className="mb-2">
                                      {subCategory.label}
                                    </Title>
                                    {subCategory.subSubCategories &&
                                      subCategory.subSubCategories.map(
                                        (subSubCategory, idx) => (
                                          <Anchor key={idx}>
                                            {subSubCategory}
                                          </Anchor>
                                        )
                                      )}
                                  </Stack>
                                );
                              } else {
                                return (
                                  <Title order={6} className="mb-2">
                                    {subCategory.label}
                                  </Title>
                                );
                              }
                            })}
                          <Stack className="gap-0.5">
                            <Title order={6} className="mb-2">
                              Fruits & Vegetables
                            </Title>
                            <Anchor>Fresh Vegetables</Anchor>
                            <Anchor>Fresh Fruits</Anchor>
                          </Stack>
                        </Group>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  );
                } else {
                  return <Anchor key={idx}>{category.label} </Anchor>;
                }
              })}
          </Group>
        </Group>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
