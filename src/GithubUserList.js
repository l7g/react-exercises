import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList({ from = ["l7g"] }) {
  const [usernames, setUsernames] = useState(from);

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.username.value;
    const newUsernames = [...usernames, value];
    setUsernames(newUsernames);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" />
        <button>Submit</button>
      </form>
      <div>
        {usernames.map((user) => {
          return <GithubUser username={user} />;
        })}
      </div>
    </div>
  );
}
