import { ActionIcon, Indicator, useMantineColorScheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons';
import React from 'react';

function Heart() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Indicator
      label={3}
      inline
      size={18}
      classNames={{
        indicator: 'text-secondary'
      }}
    >
      <ActionIcon>
        <IconHeart className={`h-6 w-6 ${dark ? 'stroke-primary' : 'stroke-secondary'}`} />
      </ActionIcon>
    </Indicator>
  );
}

export default Heart;
