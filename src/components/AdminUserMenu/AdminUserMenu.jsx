/* eslint-disable prettier/prettier */
import { Avatar, Menu, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import {
    IconLogout, IconMoneybag, IconSettings, IconUser, IconWallet
} from '@tabler/icons';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import profilePic from '../../assets/images/profile.png';
import useLogout from '../../hooks/useLogout';

const AdminUserMenu = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const signOut = async () => {
    try {
      await logout();

      toast.success('Logout Successfull', {
        style: {
          borderRadius: '10px',
          background: `${dark ? '#2D2D2D' : '#FFF'}`,
          color: `${dark ? '#FFF' : '#2D2D2D'}`
        }
      });
    } catch (error) {
      toast.error('No server response.', {
        style: {
          borderRadius: '10px',
          background: `${dark ? '#2D2D2D' : '#FFF'}`,
          color: `${dark ? '#FFF' : '#2D2D2D'}`
        }
      });
    }
    navigate('/');
  };
    return(
  <Menu>
    <Menu.Target>
      <UnstyledButton>
        <Avatar radius="xl" src={profilePic} size="sm" alt="profile pic" />
      </UnstyledButton>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item
        component={Link}
        to="/adminsetting"
        icon={<IconUser size={18} />}
      >
       Edit Profile
      </Menu.Item>
      <Menu.Item component={Link}  to="/account" icon={<IconSettings size={18} />}>
       Account Settings
      </Menu.Item>
      <Menu.Item component={Link}  to="" icon={<IconWallet size={18} />}>
      Wallet
      </Menu.Item>
      <Menu.Item component={Link}  to="/account" icon={<IconMoneybag size={18} />}>
       Billing
      </Menu.Item>
      {/* <Divider className='my-2.5'/> */}
      <Menu.Item
        component={Link}
        onClick={signOut}
        className="bg-red-300 text-white hover:text-[#000]"
        icon={<IconLogout size={18} />}
      >
        Logout
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
);}

export default AdminUserMenu;
