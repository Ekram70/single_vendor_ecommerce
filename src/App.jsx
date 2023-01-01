import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import mantineThemeObj from "../config/mantineThemeObj";
import Error from "./components/Error/Error";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import OtpComponents from "./components/OtpComponents/OtpComponents";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme, ...mantineThemeObj }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainHeader />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/otpcomponents" element={<OtpComponents />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
