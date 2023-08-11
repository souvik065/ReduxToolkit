import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },

  extraReducers(builder) {
    builder.addCase(userSlice.action.clearAllUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
