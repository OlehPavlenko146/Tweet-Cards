import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;

  width: 80px;
  height: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-color: transparent;

  cursor: pointer;
  :hover {
    transform: scale(1.05);
    background: #5cd3a8;
  }
`;
