import { useState } from "react"

export const useToken = () => {

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log(userToken);
        return userToken?.Token;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken)
    }

    return {
        token,
        setToken: saveToken
    }
}

export const Logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
}