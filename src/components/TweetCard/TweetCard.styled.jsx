import styled from "styled-components";

export const TweetCarContainer = styled.div`
  height: 460px;
  width: 380px;
  position: relative;
  padding: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  margin-right: 20px;
  width: 76px;
  height: 22px;
`;

export const MainPicture = styled.div`
  position: absolute;
  top: 28px;
  right: 36px;
  width: 308px;
  height: 168px;
  background-image: url(${(props) => props.picture});
`;

export const MiddleLine = styled.div`
  position: absolute;
  top: 214px;
  left: 0px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Circle = styled.div`
  position: absolute;
  top: -38px;
  right: 150px;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 62px;
  height: 62px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const StatWrap = styled.div`
  position: absolute;
  top: 284px;
  left: 83px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Statictics = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  position: absolute;
  top: 374px;
  left: 92px;
  width: 196px;
  height: 50px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: ${(props) => props.clicked};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
