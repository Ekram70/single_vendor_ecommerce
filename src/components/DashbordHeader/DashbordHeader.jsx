import {
  Avatar,
  Group,
  Header,
  Text,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import React from "react";
import profilePic from "../../assets/images/profile.png";
const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    height: "100px",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

const DashbordHeader = () => {
  const { classes } = useStyles();
  return (
    <Header height={100}>
      <UnstyledButton className={classes.user}>
        <Group>
          <Avatar
            className="ml-20"
            height={70}
            width={70}
            src={profilePic}
            radius="xl"
          />

          <div style={{ flex: 2 }}>
            <Text size="sm" weight={500}>
              Hello
            </Text>
            <Text size="lg" weight={500} className="font-bold">
              Dashonte Clarke
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Header>
  );
};

export default DashbordHeader;
