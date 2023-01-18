import { Box, NavLink } from '@mantine/core';
import React from 'react';
import categories from '../../../data/categories';

function NavlinkCategories() {
  return (
    <Box sx={{ width: 250 }} className="mt-5">
      {categories &&
        categories.map((category, idx) => (
          <NavLink key={idx} label={category.label}>
            {category.subCategories &&
              category.subCategories.map((subCategory, idx1) => (
                <NavLink key={idx1} label={subCategory.label} className="w-full">
                  {subCategory.subSubCategories &&
                    subCategory.subSubCategories.map((subSubCategory, idx2) => (
                      <NavLink key={idx2} label={subSubCategory} />
                    ))}
                </NavLink>
              ))}
          </NavLink>
        ))}
    </Box>
  );
}

export default NavlinkCategories;
