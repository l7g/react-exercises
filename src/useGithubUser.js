import { useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserData(username) {
    setLoading(true);
    setError(null);
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);
      let json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    data: data,
    fetchUserData: fetchUserData,
    error: error,
    loading: loading
  };
}
