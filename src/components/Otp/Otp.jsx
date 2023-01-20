import { Button, Center, Divider, Paper, Title, useMantineColorScheme } from '@mantine/core';

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Center className="min-h-[calc(100vh-55px)] w-full p-5 sm:p-10">
      <Paper
        withBorder
        shadow="lg"
        className="w-[450px] max-w-[450px] rounded-lg p-5 text-sm sm:rounded-2xl sm:p-10"
      >
        <Title order={3} className="text-center text-xl font-bold sm:text-2xl">
          Enter 4 digits code
        </Title>
        <Divider className="my-2.5 mx-auto h-0.5 w-44 border-0 bg-primary" />
        <Title order={5} className="my-5 text-center">
          Enter the 4 digits code that you have received on your email.
        </Title>

        <OtpInput
          shouldAutoFocus
          isInputNum
          value={otp}
          onChange={(val) => setOtp(val)}
          numInputs={4}
          containerStyle="my-4 mt-11 justify-between"
          inputStyle={`h-12 !w-12 rounded border-none ${
            dark ? 'bg-[#2C2E33]' : 'bg-[#F1F3F5]'
          } text-xl sm:h-16 sm:!w-16 p-0`}
          focusStyle="outline outline-primary outline-2"
        />
        <Button className="w-full rounded py-2 font-bold">Continue</Button>
      </Paper>
    </Center>
  );
};

export default Otp;
