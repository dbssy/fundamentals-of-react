import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.sectionBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium}px;
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  border-radius: ${({ theme }) => theme.borderRadius};

  a {
    color: inherit;
    text-decoration: none;

    & + a {
      margin-left: ${({ theme }) => theme.spacing.medium}px;
    }
  }
`;
