import React, {FC, useState} from 'react';
import InventoryManagementBodyComponent from "./InventoryManagementBody/InventoryManagementBodyComponent";
import ShoesAmountPopupContainer from "./ShoesAmountPopup/ShoesAmountPopupContainer";
import {useNavigate} from "react-router-dom";

const InventoryManagementComponent: FC = () => {
    const navigate = useNavigate();

    const [shoesAmountPopupOpen, setShoesAmountPopupOpen] = useState(false);

    const onNewShoesClicked = () => {
        navigate("/new-shoes")
    }

    return (
        <>
            <InventoryManagementBodyComponent onNewShoesClicked={onNewShoesClicked}
                                              onShoesAmountClicked={() => setShoesAmountPopupOpen(true)}/>
            <ShoesAmountPopupContainer onCancel={() => setShoesAmountPopupOpen(false)}
                                       open={shoesAmountPopupOpen}/>
        </>

    );
};

export default InventoryManagementComponent;
