import React, {FC, useState} from 'react';
import {Autocomplete, Button, Dialog, DialogContent, DialogTitle, TextField, TextFieldProps} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ShoesAmountDialog: FC<ShoesAmountDialogProps> = (props: ShoesAmountDialogProps) => {
    const {open, onCancel, barcodesList} = props;

    const [barcode, setBarcode] = useState('');

    const navigate = useNavigate();

    const handleBarcodeChange = (event: React.ChangeEvent<{}>, value: string | null) => {
        setBarcode(value ?? '');
    };

    const handleNextClicked = () => {
        navigate("/shoes-amount", {
            state: {
                barcode: barcode
            }
        });
    };

    const handleCancelClicked = () => {
        onCancel();
    };

    return (
        <Dialog open={open} fullWidth>
            <DialogTitle sx={{mt: 1}}>Enter Barcode</DialogTitle>
            <DialogContent>
                <Autocomplete
                    sx={{mt: 1, mb: 4}}
                    options={barcodesList}
                    getOptionLabel={(option: any) => option}
                    value={barcode}
                    onChange={handleBarcodeChange}
                    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params}
                                                                                                  label="Barcode"/>}
                />
                <Button sx={{mb: 1}} variant="contained" color="primary" onClick={handleNextClicked}>
                    Next
                </Button>
                <Button sx={{mb: 1, ml: 1}} variant="text" onClick={handleCancelClicked}>Cancel</Button>
            </DialogContent>
        </Dialog>
    );
};

interface ShoesAmountDialogProps {
    open: boolean;
    onCancel: () => void;
    barcodesList: string[];
}

export default ShoesAmountDialog;
