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

import profilePic from '../../assets/images/profile.png';

function UserMenu() {
  return (
    <Menu>
      <Menu.Target>
        <UnstyledButton>
          <Avatar radius="xl" src={profilePic} size="sm" alt="profile pic" />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconAdjustments size={14} />}>Dashboard</Menu.Item>
        <Menu.Item icon={<IconBasket size={14} />}>My Orders</Menu.Item>
        <Menu.Item icon={<IconHistory size={14} />}>Order Tracking</Menu.Item>
        <Menu.Item icon={<IconStar size={14} />}>Reviews</Menu.Item>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default UserMenu;
