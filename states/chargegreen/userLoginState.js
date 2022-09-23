import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, constSettings} from "../../Api/client";
import { USER_LOGIN_BYTOKEN } from "./types";

const initialState = {
  auth: null,
  status: "idle",
  error: null,
};

export const loginByTokenPost = createAsyncThunk(
  USER_LOGIN_BYTOKEN,
  async (initialLogin) => {
    const response = await client.post(
      `${constSettings.ApiBase}/api/Auth/UsernameLogin`,
      initialLogin
    );
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState:initialState,
  reducers: {
    successLoginByToken(state, action) {
      const { Success, Token } = action.payload;
      if(Success)
      constSettings.Token = Token;
    },
  },
  extraReducers(builders) {
    builders
      .addCase(loginByTokenPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(loginByTokenPost.fulfilled, (state, action) => {
        state.status = 'success'
        state.auth = action.payload
      })
      .addCase(loginByTokenPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const {successLoginByToken} = loginSlice.actions
export default loginSlice.reducer
export const authModel = state => state.login