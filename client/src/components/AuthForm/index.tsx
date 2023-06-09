import React, { useState } from "react";
import AuthService from "../../services/auth";
import { AuthBtn } from "../AuthBtn";
import { Keys } from "../../constants/LocalStorage";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email: any, password: any) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem(Keys.TOKEN, response.data.accessToken);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  const registration = async (email: any, password: any) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem(Keys.TOKEN, response.data.accessToken);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem(Keys.TOKEN);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      {localStorage.getItem(Keys.TOKEN) ? (
        <AuthBtn title="Logout" function={() => logout()} />
      ) : (
        <>
          <AuthBtn
            title="Registration"
            function={() => registration(email, password)}
          />
          <AuthBtn title="Login" function={() => login(email, password)} />
        </>
      )}
    </div>
  );
};
