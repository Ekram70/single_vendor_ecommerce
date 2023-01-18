import { Anchor, Box, Navbar, Text, useMantineColorScheme } from '@mantine/core';
import {
  IconAdjustments,
  IconBasket,
  IconGauge,
  IconHistory,
  IconLogout,
  IconSettings,
  IconStar
} from '@tabler/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconGauge },
  { link: '/orderhistory', label: 'Order History', icon: IconAdjustments },
  { link: '', label: 'My Orders', icon: IconBasket },
  { link: '', label: 'Reviews', icon: IconStar },
  { link: '', label: 'Order Tracking', icon: IconHistory },
  { link: '', label: 'Settings', icon: IconSettings },
  { link: '', label: 'Logout', icon: IconLogout }
];

function SideNavbar() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const [active, setActive] = useState('Dashboard');
  const activeCss = dark ? 'bg-primary/10 text-primary/80' : 'bg-primary/40';
  const deactiveCss = dark
    ? 'text-white/50 hover:bg-secondary/50'
    : 'text-secondary/70 hover:bg-secondary/5 hover:text-black/80';

  return (
    <Box component="aside" className="lg:basis-[18%]">
      <Navbar className="border-0 px-2 pt-5">
        {data &&
          data.map((singleData, idx) => (
            <Anchor
              key={idx}
              component={Link}
              to={singleData.link}
              onClick={() => {
                setActive(singleData.label);
              }}
              className={`${
                active === singleData.label ? activeCss : deactiveCss
              } flex items-center rounded p-2 font-medium hover:no-underline`}
            >
              <singleData.icon className="mr-3" />
              <Text component="span">{singleData.label}</Text>
            </Anchor>
          ))}
      </Navbar>
    </Box>
  );
}

export default SideNavbar;
