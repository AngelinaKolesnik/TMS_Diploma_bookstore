import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth";
import { Keys } from "../../constants/LocalStorage";

export const login = createAsyncThunk(
  "login",
  async (email: any, password: any) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
);

export const registration = createAsyncThunk(
  "registration",
  async (email: any, password: any) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem(Keys.TOKEN, response.data.accessToken);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkAPI: any) => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem(Keys.TOKEN);
  } catch (e: any) {
    console.log(e.response?.data?.message);
  }
});
