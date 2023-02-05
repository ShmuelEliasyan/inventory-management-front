import {FC, useEffect, useState} from "react";
import ShoesAmountDialog from "./ShoesAmountPopupComponent";
import {SHOES_API} from "../../../API/InventoryManagement/ShoesAPI";
import {setErrorAlertMessage} from "../../../Services/Redux/applicationSlice";
import {useDispatch} from "react-redux";

const ShoesAmountPopupContainer: FC<ShoesAmountPopupContainerProps> = (props: ShoesAmountPopupContainerProps) => {
    const dispatch = useDispatch();

    const {onCancel, open} = props;

    const [barcodesList, setBarcodesList] = useState([]);

    useEffect(() => {
        SHOES_API.get(`get-barcodes-list`)
            .then(response => {
                const tempBarcodesList = response.data;
                setBarcodesList(tempBarcodesList);
            }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to get barcodes list, please try again later'));
            console.error(error);
        });
    }, []);

    return <ShoesAmountDialog onCancel={onCancel} open={open} barcodesList={barcodesList}/>
}

interface ShoesAmountPopupContainerProps {
    onCancel: () => void;
    open: boolean;
}

export default ShoesAmountPopupContainer;