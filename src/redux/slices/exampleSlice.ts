import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

export interface ExampleState {
  data: Array<{ id: number; title: string }>;
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: [],
  loading: false,
  error: null,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action: PayloadAction<Array<{ id: number; title: string }>>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = exampleSlice.actions;

// Thunk to fetch data
export const fetchExampleData = () => async (dispatch: Dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch(fetchSuccess(data));
  } catch (error: any) {
    dispatch(fetchFailure(error.message));
  }
};

export default exampleSlice.reducer;
