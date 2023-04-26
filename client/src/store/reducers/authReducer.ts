import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/authInterfaces";

interface IAuthState {
  user: IUser;
  isAuth: boolean;
}

const initialState: IAuthState = {
  user: {
    id: "",
    email: "",
    isActivated: false,
  },
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload.isAuth;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const { setAuth, setUser } = authSlice.actions;
export default authSlice.reducer;
