import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeWrap = styled.div`
  height: 100vh;
`;

export const HomeTitle = styled.h1`
  padding: 20px;
  text-transform: uppercase;
  color: #471ca9;
`;
export const ListWrap = styled.ul`
  padding-left: 20px;
  padding-bottom: 20px;
`;
export const ListItem = styled.li`
  padding: 5px 0;
  color: #471ca9;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Notice = styled.p`
  padding-left: 20px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  margin-left: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #471ca9;
  padding: 5px;
  :hover {
    color: #5cd3a8;
  }
`;
