import { Box, Button, ChevronIcon, HoverCard, Stack } from '@mantine/core';
import React from 'react';
import categories from '../../../data/categories';

const BrowseAllCategories = () => (
  <Box>
    <HoverCard
      withArrow
      classNames={{
        dropdown: '!min-w-[200px] p-0'
      }}
    >
      <HoverCard.Target>
        <Button className="text-secondary" rightIcon={<ChevronIcon />}>
          Browse All Categories
        </Button>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Stack className="gap-0">
          {categories &&
            categories.map((category, idx) => (
              <HoverCard
                key={idx}
                position="right-start"
                classNames={{
                  dropdown: 'p-0'
                }}
              >
                <HoverCard.Target>
                  <Button
                    variant="default"
                    className="border-none px-3 font-normal"
                    classNames={{
                      inner: 'justify-start'
                    }}
                  >
                    {category.label}
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Stack className="gap-0">
                    {category.subCategories &&
                      category.subCategories.map((subCategory, idx1) => (
                        <HoverCard
                          key={idx1}
                          position="right-start"
                          classNames={{
                            dropdown: 'p-0'
                          }}
                        >
                          <HoverCard.Target>
                            <Button
                              variant="default"
                              className="border-none px-3 font-normal"
                              classNames={{
                                inner: 'justify-start'
                              }}
                            >
                              {subCategory.label}
                            </Button>
                          </HoverCard.Target>
                          <HoverCard.Dropdown>
                            <Stack className="gap-0">
                              {subCategory.subSubCategories &&
                                subCategory.subSubCategories.map((subSubCategory, idx2) => (
                                  <HoverCard
                                    key={idx2}
                                    position="right"
                                    classNames={{
                                      dropdown: 'p-0'
                                    }}
                                  >
                                    <HoverCard.Target>
                                      <Button
                                        variant="default"
                                        className="border-none px-3 font-normal"
                                        classNames={{
                                          inner: 'justify-start'
                                        }}
                                      >
                                        {subSubCategory}
                                      </Button>
                                    </HoverCard.Target>
                                  </HoverCard>
                                ))}
                            </Stack>
                          </HoverCard.Dropdown>
                        </HoverCard>
                      ))}
                  </Stack>
                </HoverCard.Dropdown>
              </HoverCard>
            ))}
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  </Box>
);

export default BrowseAllCategories;
