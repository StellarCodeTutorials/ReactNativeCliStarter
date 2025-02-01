import createDynamicSlice from "./createDynamicSlice";


export const postSlice = createDynamicSlice<{ id: number; title: string }>(
    "example", 
    'https://jsonplaceholder.typicode.com/posts');

export default postSlice.sliceReducer;
