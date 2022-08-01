import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;

  &.active {
    color: #f1329c;
    text-decoration: none;
  }
  &.hover {
    color: #f1329c;
    text-decoration: none;
  }
`;
