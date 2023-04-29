import { useEffect, useState } from "react";
import {
  TweetCarContainer,
  Logo,
  MiddleLine,
  Circle,
  AvatarWrap,
  MainPicture,
  StatWrap,
  Statictics,
  Button,
  Avatar,
} from "./TweetCard.styled";
import logo from "../../images/logo.svg";
import mainPicture from "../../images/main-picture.png";
import avatarDefault from "../../images/avatar.png";

export const TweetCard = ({ id, tweets, followers, avatar }) => {
  // const [isFollow, setIsFollow] = useState(
  //   localStorage.getItem(`isFollow${id}`)
  // );
  const [btnText, setBtnText] = useState(
    localStorage.getItem(`btnText${id}`)
      ? JSON.parse(localStorage.getItem(`btnText${id}`))
      : "follow"
  );
  const [followersQty, setFollowersQty] = useState(
    localStorage.getItem(`followersQty${id}`)
      ? JSON.parse(localStorage.getItem(`followersQty${id}`))
      : followers
  );
  const onClickHandler = () => {
    if (btnText === "follow") {
      setBtnText("following");

      setFollowersQty(followersQty + 1);
    } else {
      setBtnText("follow");
      setFollowersQty(followersQty - 1);
    }
  };

  useEffect(() => {
    window.localStorage.setItem(`btnText${id}`, JSON.stringify(btnText));
    window.localStorage.setItem(
      `followersQty${id}`,
      JSON.stringify(followersQty)
    );
  }, [btnText, followersQty, id]);

  return (
    <>
      <TweetCarContainer>
        <Logo src={logo} alt="logo" />
        <MainPicture picture={mainPicture}></MainPicture>
        <MiddleLine>
          <Circle>
            <AvatarWrap>
              <Avatar src={avatar} alt="avatar" />
            </AvatarWrap>
          </Circle>
        </MiddleLine>
        <StatWrap>
          <Statictics> {tweets} tweets</Statictics>
          <Statictics>
            {followersQty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            FOLLOWERS
          </Statictics>
        </StatWrap>
        <Button
          type="button"
          onClick={onClickHandler}
          clicked={btnText === "following" ? "#5CD3A8;" : "#EBD8FF;"}
        >
          {btnText}
        </Button>
      </TweetCarContainer>
    </>
  );
};
