import { useEffect } from "react";
import { useLogin } from "./useLogin";

export function LoginCustomHook(initialValue = "") {
  const { username, password, handleEvent } = useLogin(initialValue);

  useEffect(() => {
    console.log('Your username is: ', username)
    console.log('Your password is: ', password)
  }, [username, password])

  return (
    <div>
      <form onSubmit={handleEvent}>
        <input name="username" type="text" />
        <input name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
