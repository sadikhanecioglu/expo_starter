import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client ,constSettings} from "../../Api/client";
import { USER_LOGIN_BYTOKEN } from "./types";

const initialState = {
  auth: null,
  status: "idle",
  error: null,
};

export const registerByTokenPost = createAsyncThunk(
  USER_LOGIN_BYTOKEN,
  async (initialRegister) => {
    const response = await client.post(
      `${constSettings.ApiBase}/api/Auth/UsernameRegister`,
      initialRegister
    );
    return response.data;
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState:initialState,
  reducers: {
    successRegisterByToken(state, action) {
      const { Success, Token } = action.payload;
      if(Success)
      constSettings.Token = Token;
    },
  },
  extraReducers(builders) {
    builders
      .addCase(registerByTokenPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(registerByTokenPost.fulfilled, (state, action) => {
        state.status = 'success'
        state.auth = action.payload
      })
      .addCase(registerByTokenPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const {successRegisterByToken} = registerSlice.actions
export default registerSlice.reducer
export const registerModel = state => state.register
