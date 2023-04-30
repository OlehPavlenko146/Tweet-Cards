import { useEffect, useState } from "react";

import { fetchUsers } from "../../services/api/httpRequests";
import { Loader } from "../../components/Loader/Loader";
import {
  HomeTitle,
  ListWrap,
  HomeWrap,
  ListItem,
  Notice,
  Link,
} from "./Home.styled";

const Home = () => {
  const [popularUsers, setPopularUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPopularUsers() {
      try {
        setIsLoading(true);
        const users = await fetchUsers();
        const popularUsers = users
          .sort(
            (firstUser, secondUser) =>
              secondUser.followers - firstUser.followers
          )
          .slice(0, 10);
        if (popularUsers.length > 0) {
          setPopularUsers(
            popularUsers.map((popularUser) => ({
              id: popularUser.id,
              name: popularUser.user,
              followers: popularUser.followers,
            }))
          );
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getPopularUsers();
  }, []);
  return (
    <HomeWrap>
      {isLoading && <Loader />}
      <HomeTitle>Most popular users</HomeTitle>
      <ListWrap>
        {popularUsers?.map((popularUser) => (
          <ListItem key={popularUser.id}>
            {popularUser.name}, followers: {popularUser.followers}
          </ListItem>
        ))}
      </ListWrap>
      <Notice>
        You can find tweet cards of these and other users by following the page
        <Link to="/tweets">Tweets</Link>
      </Notice>
    </HomeWrap>
  );
};

export default Home;
