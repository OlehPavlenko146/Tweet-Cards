import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  > nav {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  margin-left: 16px;
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
