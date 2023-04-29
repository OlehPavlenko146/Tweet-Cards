import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api/httpRequests";
import { TweetCard } from "./TweetCard";
import { TweetCardList } from "./TweetCardsList.styled";
import { Button } from "../../components/Button/Button";

export const TweetCardsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const limitUsersPerPage = 3;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const users = await fetchUsers();

        if (users.length > 0) {
          setUsers(users.map((user) => user));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, []);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const lastUserIdx = page * limitUsersPerPage;
  const firstUserIdx = lastUserIdx - limitUsersPerPage;
  const currentUsers = users.slice(firstUserIdx, lastUserIdx);

  return (
    <>
      <TweetCardList>
        {currentUsers?.map((user) => (
          <li key={user.id}>
            <TweetCard
              id={user.id}
              followers={user.followers}
              avatar={user.avatar}
              tweets={user.tweets}
            />
          </li>
        ))}
      </TweetCardList>
      <Button onClick={loadMore} />
    </>
  );
};
