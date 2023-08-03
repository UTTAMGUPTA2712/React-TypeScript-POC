import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type value = {
  user: string[];
};
const initialvalue:value = {
  user: [],
};
export const MessageSlice = createSlice({
  name: "Message",
  initialState: initialvalue,
  reducers: {
    setMessage: (state, action:PayloadAction<string[]>) => {
      state.user = action?.payload;
    },
  },
});
export const {setMessage} = MessageSlice.actions;
export default MessageSlice.reducer;