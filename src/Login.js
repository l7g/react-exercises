import React from "react";
import { useState, useRef, useEffect } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  function handleInput(event){
    const {name, type, value, checked} = event.target;

    setData((data) => {
      return { ...data, [name]: type === "checkbox" ? checked : value };
    });
  };

  function onReset() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  };

  function onLogin(){
    console.log(data);
  };

  const buttonStyle = {
    background: data.password.length < 8 ? "red" : "green",
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        name="username"
        type="text"
        ref={inputRef}
        value={data.username}
        onChange={handleInput}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInput}
      />
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInput}
      />
      {data.username !== "" && data.password !== "" ? (
        <button style={buttonStyle} onClick={onLogin}>
          Login
        </button>
      ) : (
        <button disabled>Login</button>
      )}
      {data.username !== "" && data.password !== "" ? (
        <button onClick={onReset}>Reset</button>
      ) : (
        <button disabled>Reset</button>
      )}
    </div>
  );
}
