import {FC, useState} from "react";
import {SHOES_API} from "../../../API/InventoryManagement/ShoesAPI";
import {useDispatch} from "react-redux";
import NewShoesPageComponent from "./NewShoesPageComponent";
import {setErrorAlertMessage, setIsLoading, setSuccessAlertMessage} from "../../../Services/Redux/applicationSlice";
// @ts-ignore
import Loading from "react-fullscreen-loading";
import {useNavigate} from "react-router-dom";
import {Shoes} from "../../../Types/Shoes";

const NewShoesPageContainer: FC = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const addNewShoes = async (shoesToAdd: Shoes) => {
        dispatch(setIsLoading(true));
        await SHOES_API.post(`add-shoes`, shoesToAdd).then(() => {
            dispatch(setSuccessAlertMessage('New shoes has been added.'));
            dispatch(setIsLoading(false));
            navigate("/shoes-amount", {
                state: {
                    barcode: shoesToAdd.barcode
                }
            });
        }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to add new shoes, please try again later'));
            console.error(error);
            dispatch(setIsLoading(false));
        });
    }

    return <NewShoesPageComponent addNewShoes={addNewShoes}/>;
}

export default NewShoesPageContainer;