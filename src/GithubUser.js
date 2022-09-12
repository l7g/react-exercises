import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const {data, fetchUserData} = useGithubUser(username)

  useEffect(() => {
    fetchUserData(username);
  }, [username]);


  return (
    <div>
      {data && <h1>{data.name}</h1>}
      {data && <h3>Username: {data.login}</h3>}
      {data && <h5>Github link: <a href={data.html_url}>{data.html_url}</a></h5>}
    </div>
  );
}
