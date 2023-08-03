import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type value = {
  user: string | null;
};
const initialvalue:value = {
  user: null,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialvalue,
  reducers: {
    login: (state, action:PayloadAction<string>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;