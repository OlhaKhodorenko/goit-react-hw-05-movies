import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px 10px 0;
  text-decoration: underline;
  color: black;
  font-weight: 700;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
