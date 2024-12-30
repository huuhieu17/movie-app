import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  listCategory: [],
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async amount => {
//     const response = await fetchCount(amount);
//     return response.data;
//   },
// );

export const getListCategory = createAsyncThunk('category/fetchCategory',
    async () => {
        return []
    }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setListCategory: (state, action) => {
      state.listCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getListCategory.fulfilled, (state, action) => {
        state.listCategory = action.payload;
      });
  },
});

export const { setListCategory } = categorySlice.actions;

export const selectListCategory = (state: any) => state.listCategory.value;


export default categorySlice.reducer;

