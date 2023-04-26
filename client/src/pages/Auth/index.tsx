import React, { useEffect, useState } from "react";
import { AuthResponse, IUser } from "../../interfaces/authInterfaces";
import { API_URL } from "../../http";
import { Keys } from "../../constants/LocalStorage";
import UserService from "../../services/user";
import { LoginForm } from "../../components/AuthForm";
import axios from "axios";

export const Auth = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const checkAuth = async () => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem(Keys.TOKEN, response.data.accessToken);
    } catch (e) {
      console.log(e.response?.data?.message);
	 }
  };

  // according to this logic add to fav and basket
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (localStorage.getItem(Keys.TOKEN)) {
      checkAuth();
    }
  }, []);

  return (
    <>
      <LoginForm />
      {/* <div>
        <button onClick={getUsers}>Get users</button>
      </div> */}
      {/* {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))} */}
    </>
  );
};
