import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

export type ApplicationSliceStateType = {
    successAlertMessage: string;
    errorAlertMessage: string;
    isLoading: boolean;
};

export const initialState: ApplicationSliceStateType = {
    successAlertMessage: '',
    errorAlertMessage: '',
    isLoading: false
};

export const applicationSlice: Slice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setSuccessAlertMessage: (state, action: PayloadAction<string>): void => {
            state.successAlertMessage = action.payload;
        },
        setErrorAlertMessage: (state, action: PayloadAction<string>): void => {
            state.errorAlertMessage = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>): void => {
            state.isLoading = action.payload;
        },
        reset: (state, _action: PayloadAction<void>): void => {
            state.successAlertMessage = initialState.successAlertMessage;
            state.errorAlertMessage = initialState.errorAlertMessage;
            state.isLoading = initialState.isLoading;
        },
    },
});

export const {setSuccessAlertMessage, setErrorAlertMessage, setIsLoading, reset} =
    applicationSlice.actions;

type applicationSliceState = { application: ApplicationSliceStateType };

export const selectSuccessAlertMessage = (state: applicationSliceState): string =>
    state.application.successAlertMessage;

export const selectErrorAlertMessage = (state: applicationSliceState): string =>
    state.application.errorAlertMessage;

export const selectIsLoading = (state: applicationSliceState): boolean =>
    state.application.isLoading;

export default applicationSlice.reducer;
