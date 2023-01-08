import {
  Button,
  Center,
  Divider,
  Group,
  Paper,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

let currentOtpIndex = 0;

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  const handleChange = (e) => {
    const newOtp = [...otp];
    const { value } = e.target;

    newOtp[currentOtpIndex] = value;
    setOtp(newOtp);
  };

  const handleKeyDown = (e, idx) => {
    const { key } = e;
    currentOtpIndex = idx;

    if (key === "Backspace") {
      if (currentOtpIndex > 0) {
        setActiveOtpIndex(currentOtpIndex - 1);
      }
    } else if (key === "ArrowRight") {
      if (currentOtpIndex < 3) {
        setActiveOtpIndex(currentOtpIndex - 1);
      }
    } else if (key === "ArrowLeft") {
      if (currentOtpIndex > 0) {
        setActiveOtpIndex(currentOtpIndex - 1);
      }
    } else {
      if (currentOtpIndex < 3) {
        setActiveOtpIndex(currentOtpIndex + 1);
      }
    }
  };

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
        <Group className="my-4 mt-11 gap-0 rounded-lg" position="apart">
          {otp.map((value, idx) => (
            <TextInput
              key={idx}
              maxLength={1}
              value={value}
              ref={idx === activeOtpIndex ? inputRef : null}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              classNames={{
                input:
                  "text-center text-xl w-14 h-14 sm:w-16 sm:h-16 rounded-lg shadow-md",
              }}
            />
          ))}
        </Group>

        <Button className="w-full rounded py-2 font-bold">Continue</Button>
      </Paper>
    </Center>
  );
};

export default Otp;
