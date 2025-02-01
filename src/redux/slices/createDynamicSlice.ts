import {createSlice, PayloadAction, Dispatch} from '@reduxjs/toolkit';
import {fetchAPI} from '../services/api';

// Generic State Interface
export interface GenericState<T> {
  data: any[];
  loading: boolean;
  error: string | null;
}

// Function to create a dynamic slice with GET, POST, DELETE methods
const createDynamicSlice = <T>(
  sliceName: string,
  apiUrl: string
) => {
  const initialState: GenericState<T> = {
    data: [],
    loading: false,
    error: null,
  };

  const slice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
      requestStart(state) {
        state.loading = true;
        state.error = null;
      },
      requestSuccess(state, action: PayloadAction<T[]>) {
        state.loading = false;
        state.data = action.payload;
      },
      requestFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },
      addItem(state, action: PayloadAction<T>) {
        state.data.push(action.payload);
        state.loading = false;
      },
      updateItem(state, action: PayloadAction<T>) {
        const index = state.data.findIndex(
          item => (item as any).id === (action.payload as any).id,
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        state.loading = false;
      },
      deleteItem(state, action: PayloadAction<number>) {
        state.data = state.data.filter(
          item => (item as any).id !== action.payload,
        );
        state.loading = false;
      },
    },
  });

  const {
    requestStart,
    requestSuccess,
    requestFailure,
    addItem,
    updateItem,
    deleteItem,
  } = slice.actions;

  // Thunk functions
  const fetchData = () => async (dispatch: Dispatch) => {
    dispatch(requestStart());
    try {
      const response = await fetchAPI<T[]>(apiUrl, 'GET');
      dispatch(requestSuccess(response));
    } catch (error: any) {
      dispatch(requestFailure(error.message));
    }
  };

  const postData = (newItem: T) => async (dispatch: Dispatch) => {
    dispatch(requestStart());
    try {
      const response = await fetchAPI<T>(apiUrl, 'POST', newItem);
      dispatch(addItem(response));
    } catch (error: any) {
      dispatch(requestFailure(error.message));
    }
  };

  const updateData =
    (id: number, updatedItem: T) => async (dispatch: Dispatch) => {
      dispatch(requestStart());
      try {
        const response = await fetchAPI<T>(
          `${apiUrl}/${id}`,
          'PUT',
          updatedItem,
        );
        dispatch(updateItem(response));
      } catch (error: any) {
        dispatch(requestFailure(error.message));
      }
    };

  const deleteData = (id: number) => async (dispatch: Dispatch) => {
    dispatch(requestStart());
    try {
      await fetchAPI(`${apiUrl}/${id}`, 'DELETE');
      dispatch(deleteItem(id));
    } catch (error: any) {
      dispatch(requestFailure(error.message));
    }
  };

  return {
    sliceReducer: slice.reducer,
    fetchData,
    postData,
    updateData,
    deleteData,
    actions: slice.actions,
  };
};

export default createDynamicSlice;
