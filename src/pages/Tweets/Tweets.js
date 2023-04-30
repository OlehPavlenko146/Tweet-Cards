import { TweetCardsList } from "../../components/TweetCard/TweetCardsList";

import { useLocation } from "react-router-dom";
import { BackLink } from "./Tweets.styled.jsx";

const Tweets = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  return (
    <>
      <BackLink to={backLink}>Back</BackLink>
      <TweetCardsList />;
    </>
  );
};

export default Tweets;
