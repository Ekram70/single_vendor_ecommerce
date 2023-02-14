import { ActionIcon, Indicator, useMantineColorScheme } from '@mantine/core';
import { IconNotification } from '@tabler/icons';
import React from 'react';

const AdminNotificationIcon = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Indicator
      label={3}
      color="cyan"
      inline
      size={18}
      classNames={{
        indicator: 'text-secondary'
      }}
    >
      <ActionIcon>
        <IconNotification
          className={`h-8 w-8 ${dark ? 'stroke-primary' : 'stroke-secondary'}`}
        />
      </ActionIcon>
    </Indicator>
  );
};

export default AdminNotificationIcon;
