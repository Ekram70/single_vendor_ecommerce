import { ActionIcon, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import React from "react";

const SearchBar = () => {
  return (
    <TextInput
      placeholder="Search for items..."
      className="grow"
      classNames={{
        root: "max-w-[650px]",
        rightSection: "w-10",
      }}
      rightSection={
        <ActionIcon
          variant="filled"
          color="brand"
          className="h-full w-full rounded-l-none"
        >
          <IconSearch className="h-6 w-6 stroke-secondary" />
        </ActionIcon>
      }
    />
  );
};

export default SearchBar;
