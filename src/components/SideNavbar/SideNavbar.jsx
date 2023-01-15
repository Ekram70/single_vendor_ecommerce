import {
  Anchor,
  Box,
  Navbar,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconAdjustments,
  IconBasket,
  IconGauge,
  IconHistory,
  IconLogout,
  IconSettings,
  IconStar,
} from "@tabler/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  { link: "", label: "Dashboard", icon: IconGauge },
  { link: "", label: "Order History", icon: IconAdjustments },
  { link: "", label: "My Orders", icon: IconBasket },
  { link: "", label: "Reviews", icon: IconStar },
  { link: "", label: "Order Tracking", icon: IconHistory },
  { link: "", label: "Settings", icon: IconSettings },
  { link: "", label: "Logout", icon: IconLogout },
];

const SideNavbar = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [active, setActive] = useState("Dashboard");

  return (
    <Box component="aside" className="basis-[20%]">
      <Navbar className="h-screen max-w-[250px] px-2 pt-5">
        {data &&
          data.map((singleData, idx) => (
            <Anchor
              key={idx}
              component={Link}
              onClick={(event) => {
                event.preventDefault();
                setActive(singleData.label);
              }}
              className={`${
                active === singleData.label
                  ? dark
                    ? "bg-primary/10 text-primary/80"
                    : "bg-primary/40"
                  : dark
                  ? "text-white/50 hover:bg-secondary/50"
                  : "text-secondary/70 hover:bg-secondary/5 hover:text-black/80"
              } flex items-center rounded p-2 font-medium hover:no-underline`}
            >
              <singleData.icon className="mr-3" />
              <Text component="span">{singleData.label}</Text>
            </Anchor>
          ))}
      </Navbar>
    </Box>
  );
};

export default SideNavbar;
