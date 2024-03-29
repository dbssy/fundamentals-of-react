import React, { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext('dark');

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storageValueTheme = localStorage.getItem('theme');

    if (storageValueTheme) {
      return JSON.parse(storageValueTheme);
    }

    return [];
  });

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        onToggleTheme: handleToggleTheme,
        selectedThemeIcon: theme
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
