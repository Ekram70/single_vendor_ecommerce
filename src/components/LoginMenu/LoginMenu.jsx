import { ActionIcon, Anchor, Group, useMantineColorScheme } from '@mantine/core';
import { IconUser } from '@tabler/icons';
import React from 'react';

function LoginMenu() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group className="gap-0">
      <ActionIcon>
        <IconUser className={`h-6 w-6 ${dark ? 'stroke-primary' : 'stroke-secondary'}`} />
      </ActionIcon>
      <Anchor
        component="button"
        type="button"
        className={`font-semibold ${dark ? 'text-primary' : 'text-secondary'}`}
      >
        Login
      </Anchor>
    </Group>
  );
}

export default LoginMenu;
