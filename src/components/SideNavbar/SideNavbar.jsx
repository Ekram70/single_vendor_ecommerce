import { Navbar, createStyles } from "@mantine/core";
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
const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});
const data = [
  { link: "/home", label: "Dashboard", icon: IconGauge },
  { link: "/order", label: "Order History", icon: IconAdjustments },
  { link: "", label: " My Orders", icon: IconBasket },
  { link: "", label: " Reviews", icon: IconStar },
  { link: "", label: " Order Tracking", icon: IconHistory },
  { link: "", label: " Settings", icon: IconSettings },
  { link: "", label: "Logout", icon: IconLogout },
];

const SideNavbar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");
  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));
  return (
    <div>
      <Navbar className="my-3 h-screen" width={{ sm: 300 }} p="md">
        <Navbar.Section grow>{links}</Navbar.Section>
      </Navbar>
    </div>
  );
};

export default SideNavbar;
