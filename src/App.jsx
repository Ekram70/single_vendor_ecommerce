import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import mantineThemeObj from '../config/mantineThemeObj';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineThemeObj}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
