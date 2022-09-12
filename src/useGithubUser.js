import { useState } from "react";

export function useGithubUser(username){
  const [data, setData] = useState(null);

  async function fetchUserData(username){
    let response = await fetch(`https://api.github.com/users/${username}`);
    let json = await response.json();
    setData(json);
  }

  return{
    data: data,
    fetchUserData: fetchUserData,
  }

}