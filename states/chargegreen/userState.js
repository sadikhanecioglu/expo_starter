import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, constSettings } from "../../Api/client";

const initialState = {
  currentUser: null,
  swipeStatus: {
    success: false,
    user: null,
  },
  connectChatUser: null,
  matchedUsers: null,
  matchedMessages: null,
  socketStatus: "idle",
  status: "idle",
  error: null,
};

export const currentUserByToken = createAsyncThunk("user/me", async () => {
  const response = await client.get(`${constSettings.ApiBase}/api/auth/me`);
  return response.data;
});

export const matchedUsers = createAsyncThunk("user/get-matches", async () => {
  const response = await client.get(
    `${constSettings.ApiBase}/api/auth/get-matches`
  );
  return response.data;
});



export const setUserNamePost = createAsyncThunk(
  "user/set-userName",
  async (initialUserName) => {
    const response = await client.post(
      `${constSettings.ApiBase}/api/auth/set-userName`,
      initialUserName
    );
    return response.data;
  }
);

export const setUserAvatarPost = createAsyncThunk(
  "user/set-userAvatar",
  async (initialUserAvatar) => {
    const response = await client.post(
      `${constSettings.ApiBase}/api/auth/set-avatar`,
      initialUserAvatar
    );
    return response.data;
  }
);

export const sendSwipe = createAsyncThunk(
  "userNft/sendSwipe",
  async (initialSwipe) => {
    const response = await client.get(
      `${constSettings.ApiBase}/api/auth/swipe-nft/${initialSwipe.token}`
    );
    return response.data;
  }
);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    changeAvatar(state, action) {
      state.currentUser.avatar = action.payload;
    },
    exitSwipeSuccess(state, action) {
      state.swipeStatus.success = action.payload;
    },
    changeSocketStatus(state, action) {
      state.socketStatus = action.payload;
    },
  },
  extraReducers(builders) {
    builders
      .addCase(currentUserByToken.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(currentUserByToken.fulfilled, (state, action) => {
        state.status = "success";
        state.currentUser = action.payload;
      })
      .addCase(currentUserByToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(setUserNamePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(setUserNamePost.fulfilled, (state, action) => {
        state.status = "success";
        state.currentUser.userName = action.payload.userName;
      })
      .addCase(setUserNamePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(setUserAvatarPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(setUserAvatarPost.fulfilled, (state, action) => {
        state.status = "success";
        state.currentUser.avatar = action.payload.avatar;
      })
      .addCase(setUserAvatarPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendSwipe.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendSwipe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.swipeStatus = action.payload;
      })
      .addCase(sendSwipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(matchedUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(matchedUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matchedUsers = action.payload;
      })
      .addCase(matchedUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
   ;
  },
});
export const {
  changeAvatar,
  exitSwipeSuccess,
  changeSocketStatus,
} = currentUserSlice.actions;
export default currentUserSlice.reducer;
export const currentUserModel = (state) => state.currentUser;
