import { Avatar, Menu, UnstyledButton } from '@mantine/core';
import {
  IconAdjustments,
  IconBasket,
  IconHistory,
  IconLogout,
  IconSettings,
  IconStar
} from '@tabler/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import profilePic from '../../assets/images/profile.png';

const UserMenu = () => (
  <Menu>
    <Menu.Target>
      <UnstyledButton>
        <Avatar radius="xl" src={profilePic} size="sm" alt="profile pic" />
      </UnstyledButton>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item
        component={Link}
        to="/dashboard"
        icon={<IconAdjustments size={14} />}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item component={Link} icon={<IconBasket size={14} />}>
        My Orders
      </Menu.Item>
      <Menu.Item component={Link} icon={<IconHistory size={14} />}>
        Order Tracking
      </Menu.Item>
      <Menu.Item component={Link} icon={<IconStar size={14} />}>
        Reviews
      </Menu.Item>
      <Menu.Item component={Link} icon={<IconSettings size={14} />}>
        Settings
      </Menu.Item>
      <Menu.Item component={Link} icon={<IconLogout size={14} />}>
        Logout
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
);

export default UserMenu;
