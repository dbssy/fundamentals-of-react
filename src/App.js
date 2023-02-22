import React from 'react';

import GlobalStyle from './styles/global';

import { ThemeContextProvider } from './contexts/ThemeContext';

import Layout from './components/Layout';

export default function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Layout />
    </ThemeContextProvider>
  );
};
