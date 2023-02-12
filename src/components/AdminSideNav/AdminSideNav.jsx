/* eslint-disable prettier/prettier */
import { Anchor, Box, Text, useMantineColorScheme } from '@mantine/core';
import {
  IconCurrencyDollar, IconLayoutDashboard, IconMessage2, IconPlaystationCircle, IconPlus, IconSettings, IconShoppingBag, IconShoppingCart, IconUserX
} from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  { link: '/admindashboard', label: 'Admin Dashboard', icon: IconLayoutDashboard },
  { link: '/adminproducts', label: 'Products', icon: IconShoppingBag },
  { link: '/adminorders', label: 'Orders', icon: IconShoppingCart },
  { link: '', label: 'Add Product', icon: IconPlus },
  { link: '', label: 'Transactions', icon: IconCurrencyDollar },
  { link: '', label: 'Account', icon: IconUserX },
  { link: '', label: 'Reviews', icon: IconMessage2 },
  { link: '', label: 'Statistics', icon: IconPlaystationCircle },
  { link: '', label: 'Settings', icon: IconSettings }
];

const AdminSideNav = () => {
    const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const [active, setActive] = useState('Dashboard');
  const activeCss = dark ? 'bg-primary/10 text-primary/80' : 'bg-primary/40';
  const deactiveCss = dark
    ? 'text-white/50 hover:bg-secondary/50'
    : 'text-secondary/70 hover:bg-secondary/5 hover:text-black/80';
    return(
        <Box component="aside" className="px-2 pt-5">
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
                <Text component="span" className='my-1'>{singleData.label}</Text>
              </Anchor>
            ))}
      </Box>
    );

};

export default AdminSideNav;
