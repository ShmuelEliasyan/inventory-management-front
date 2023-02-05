import {configureStore} from "@reduxjs/toolkit";
import applicationReducer from "./applicationSlice";

const store = configureStore({
    reducer: {
        application: applicationReducer,
    },
});

export default store;
