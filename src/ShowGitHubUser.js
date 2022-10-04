import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { useGithubUser } from "./useGithubUser";

export function ShowGitHubUser() {
  const { username } = useParams();

  return <GithubUser username={username} />;
}
