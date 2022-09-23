import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, constSettings } from "../../Api/client";

export const getAllUserAvatars = createAsyncThunk(
  "userNft/getAllUserAvatars",
  async () => {
    const response = await client.get(
      `${constSettings.ApiBase}/api/auth/nft-users`
    );
    return response.data;
  }
);



const initialState = {
  allNfts: null,
  swipeStatus: "none",
  status: "idle",
  error: null,
};

const userNftSlice = createSlice({
  name: "userNfts",
  initialState: initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(getAllUserAvatars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllUserAvatars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allNfts = action.payload;
      })
      .addCase(getAllUserAvatars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

  },
});

export default userNftSlice.reducer;
export const userNfts = (state) => state.userNfts;
