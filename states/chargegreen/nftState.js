import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, constSettings } from "../../Api/client";
import { useDispatch } from "react-redux";

const dispatch = () => useDispatch();

export const getOwnerNfts = createAsyncThunk("nft/getOwnerNfts",
  async () => {
    const response = await client.get(`${constSettings.ApiBase}/api/auth/me-nfts/`);
    return response.data;
  });

export const getPopulerNfts = createAsyncThunk('nft/getpopulernfts',

  async () => {
    const response = await client.get(`${constSettings.ApiBase}/api/auth/getpopulernfts/`)
    return response.data;
  }
);

export const getPopularDetail  = createAsyncThunk("nft/getPopularDetail",
  async (symbol) => {
     
      const response = await client.get(`${constSettings.ApiBase}/api/auth/getpopulernft/${symbol}`);

      return response.data;
    }
);

export const getPopularChart  = createAsyncThunk("nft/getPopularChart",
  async (params) => {
     
     // const response = await client.get(`https://stats-mainnet.magiceden.io/collection_stats/getCollectionTimeSeries/${symbol}?edge_cache=true&resolution=1d`);
      const response = await client.get(`${constSettings.ApiBase}/api/auth/getCollectionTimeSeries/${params.symbol}?edge_cache=true&resolution=${params.rdate}`);

      return response.data;
    }
);

const initialState = {
  nfts: null,
  popularNfts: null,
  popularNftDetail: null,
  popularChartData: null,
  chartDataSources:{
    floorData:null,
    volumeData:null,
    listedData:null,
  },
  chartDate:'1h',
  status: "idle",
  error: null,

};

const OwnerNftSlice = createSlice({
  name: "ownernfts",
  initialState: initialState,
  reducers: { 
    getPNftDetail(state,action){
      state.popularNftDetail = action.payload
    },
    removeDetailNft(state,action){
      state.popularNftDetail = null;
    },
    removeChartData(state,action){
      state.popularChartData = null;
    },
    changeChartDate(state,action){
      state.chartDate = action.payload
    },
    setChartDataSources(state,action){
      state.chartDataSources = action.payload
    }
  },
  extraReducers(builders) {
    builders
      .addCase(getOwnerNfts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getOwnerNfts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nfts = action.payload;
      })
      .addCase(getOwnerNfts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPopulerNfts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPopulerNfts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularNfts = action.payload;
      })
      .addCase(getPopulerNfts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPopularDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPopularDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularNftDetail = action.payload;
      })
      .addCase(getPopularDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPopularChart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPopularChart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularChartData = action.payload;
      })
      .addCase(getPopularChart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      ;
  },
});

export const { removeDetailNft, removeChartData,changeChartDate,setChartDataSources } = OwnerNftSlice.actions;
export default OwnerNftSlice.reducer;
export const allNfts = state => state.nft;