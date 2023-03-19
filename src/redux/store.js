import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/post";
import { authReducer } from "./slices/auth";
import { searchReducer} from "./slices/search";

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    search: searchReducer,
  }
})

export default store