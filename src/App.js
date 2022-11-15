import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Hero from './components/Hero';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';


function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Hero></Hero>
        <Routes>
          <Route path="/" index element={<UserPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
        <Footer></Footer>
      </ChakraProvider>
    </Router>
  );
}

export default App;
