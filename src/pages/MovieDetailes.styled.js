import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  border-bottom: 1px solid #0000003d;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px;
  padding-bottom: 10px;
`;
export const InfoContainer = styled.div`
  margin: 16px;
`;

export const AdditonalInfoContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px;
  padding-bottom: 10px;
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
export const Button = styled.button`
  margin: 8px;
  background-color: #f5f5f5;
  border: 1px solid #80808085;
  border-radius: 4px;
  cursor: pointer;

  &.hover {
    background-color: white;
  }
`;
