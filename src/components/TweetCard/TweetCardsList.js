import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api/httpRequests";
import { TweetCard } from "./TweetCard";

import { TweetCardList, BtnWrap } from "./TweetCardsList.styled";
import { Button } from "../../components/Button/Button";
import { Loader } from "../Loader/Loader";
import toast from "react-hot-toast";

export const TweetCardsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const limitUsersPerPage = 3;

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const previous = () => {
    setPage((page) => page - 1);
  };

  let lastUserIdx = page * limitUsersPerPage;
  let firstUserIdx = lastUserIdx - limitUsersPerPage;
  const currentUsers = users.slice(firstUserIdx, lastUserIdx);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const users = await fetchUsers();

        if (users.length > 0) {
          setUsers(users.map((user) => user));
        }
      } catch (error) {
        toast("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

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
      <BtnWrap>
        {currentUsers.length >= limitUsersPerPage &&
          users.length !== lastUserIdx && (
            <Button onClick={loadMore} name={"Load more"} />
          )}
        {lastUserIdx > limitUsersPerPage && (
          <Button onClick={previous} name={"Previous"} />
        )}
      </BtnWrap>
    </>
  );
};
