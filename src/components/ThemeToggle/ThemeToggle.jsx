import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      className="h-6 w-6"
    >
      {dark ? (
        <IconSun className="stroke-primary" />
      ) : (
        <IconMoonStars className="stroke-secondary" />
      )}
    </ActionIcon>
  );
};

export default ThemeToggle;
