import HeaderComponent from "../Header/HeaderComponent";
import {Alert, AlertColor, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    reset,
    selectErrorAlertMessage, selectIsLoading,
    selectSuccessAlertMessage
} from "../../Services/Redux/applicationSlice";
// @ts-ignore
import Loading from "react-fullscreen-loading";

const LayoutComponent = (props: any) => {

    const successAlertMessage = useSelector(selectSuccessAlertMessage);
    const errorAlertMessage = useSelector(selectErrorAlertMessage);
    const isLoading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    const handleCloseSnackbar = () => {
        dispatch(reset(''));
    }

    const isSnackbarOpen = (): boolean => {
        return !!successAlertMessage || !!errorAlertMessage;
    }

    const getSnackbarSeverity = (): AlertColor | undefined => {
        return successAlertMessage ? "success" : "error";
    }

    const getSnackbarMessage = (): string => {
        return successAlertMessage || errorAlertMessage;
    }

    return (
        <div>
            <HeaderComponent/>
            <main>{props.children}</main>
            <Snackbar open={isSnackbarOpen()} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert severity={getSnackbarSeverity()} sx={{width: '100%'}}>
                    {getSnackbarMessage()}
                </Alert>
            </Snackbar>
            <Loading loading={isLoading} background="white" loaderColor="#3f51b5"/>
        </div>
    )
}

export default LayoutComponent;