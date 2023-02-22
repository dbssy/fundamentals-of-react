import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header() {
  const { onToggleTheme, selectedThemeIcon } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedThemeIcon === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
