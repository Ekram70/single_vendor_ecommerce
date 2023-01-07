import { Box, NavLink } from "@mantine/core";
import React from "react";
import categories from "../../../data/categories";

const NavlinkCategories = () => {
  return (
    <Box sx={{ width: 250 }} className="mt-5">
      {categories &&
        categories.map((category, idx) => (
          <NavLink key={idx} label={category.label}>
            {category.subCategories &&
              category.subCategories.map((subCategory, idx) => (
                <NavLink key={idx} label={subCategory.label} className="w-full">
                  {subCategory.subSubCategories &&
                    subCategory.subSubCategories.map((subSubCategory, idx) => (
                      <NavLink key={idx} label={subSubCategory} />
                    ))}
                </NavLink>
              ))}
          </NavLink>
        ))}
    </Box>
  );
};

export default NavlinkCategories;
