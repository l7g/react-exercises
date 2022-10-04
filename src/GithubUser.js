import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const username = useParams()
  const {data, fetchUserData, error, loading} = useGithubUser(username)

  useEffect(() => {
    fetchUserData(username);
  }, [username]);


  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>An error occured</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <h3>Username: {data.login}</h3>}
      {data && <h5>Github link: <a href={data.html_url}>{data.html_url}</a></h5>}
    </div>
  );
}
