import { Anchor, Image, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/images/logo-black.svg';
import logoWhite from '../../assets/images/logo-white.svg';

const Logo = ({ width }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Anchor component={Link} to="/">
      <Image src={dark ? logoBlack : logoWhite} alt="logo" width={width} />
    </Anchor>
  );
};

export default Logo;
