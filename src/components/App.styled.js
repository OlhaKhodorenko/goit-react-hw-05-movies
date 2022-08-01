import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #0000003d;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px;

  .link {
    font-size: 14pt;
    color: inherit;
    text-decoration: none;
  }

  .active {
    font-size: 14pt;
    color: inherit;
    text-decoration: none;
    text-decoration: underline;
  }

  .link:not(:last-child) {
    margin-right: 20px;
  }

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14pt;

  &.active {
    color: #f1329c;
    text-decoration: none;
  }
`;
