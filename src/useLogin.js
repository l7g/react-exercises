import { useState } from "react";

export function useLogin(initialValue = ''){
    const [username, setUsername] = useState(initialValue);
    const [password, setPassword] = useState(initialValue);

    function handleEvent(event){
        event.preventDefault();
        setUsername(event.target.elements.username.value)
        setPassword(event.target.elements.password.value)
    }

    return {
        username: username,
        password: password,
        handleEvent: handleEvent,
    }
}