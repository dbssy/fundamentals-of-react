import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer() {
  const { onToggleTheme, selectedThemeIcon } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedThemeIcon === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
