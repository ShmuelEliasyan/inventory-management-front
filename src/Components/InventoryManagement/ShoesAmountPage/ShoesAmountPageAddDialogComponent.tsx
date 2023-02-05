import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Button, Dialog, DialogContent, DialogTitle, IconButton, TextField} from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import {ShoesAmount} from "../../../Types/Shoes";

export const ShoesAmountPageAddDialogComponent: FC<ShoesAmountPageAddDialogComponentProps> = (props: ShoesAmountPageAddDialogComponentProps) => {
    const {addDialogOpen, setAddDialogOpen, addShoesAmount, barcode} = props;

    const [textFields, setTextFields] = useState([
        {id: 1, size: '', amount: ''},
    ]);
    const [disablePopupButtons, setDisablePopupButtons] = useState(false);

    const handleAddClick = () => {
        const newTextField = {
            id: textFields.length + 1,
            size: '',
            amount: '',
        };
        setTextFields([...textFields, newTextField]);
    };

    const handleShoeSizeChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: number) => {
        const updatedTextFields = textFields.map((textField) => {
            if (textField.id === id) {
                return {...textField, size: e.target.value};
            }
            return textField;
        });
        setTextFields(updatedTextFields);
    };

    const handleShoeAmountChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: number) => {
        const updatedTextFields = textFields.map((textField) => {
            if (textField.id === id) {
                return {...textField, amount: e.target.value};
            }
            return textField;
        });
        setTextFields(updatedTextFields);
    };

    const handleCancelAdd = () => {
        resetDialogProperties();
    }

    const handleAdd = async () => {
        setDisablePopupButtons(true);

        const shoesAmountToAdd = textFields.map(textField => {
            const shoesAmount: ShoesAmount = {size: textField.size, amount: Number(textField.amount), barcode};
            return shoesAmount;
        });

        await addShoesAmount(shoesAmountToAdd);

        resetDialogProperties();
    }

    const resetDialogProperties = () => {
        setDisablePopupButtons(false);
        setTextFields([
            {id: 1, size: '', amount: ''},
        ]);
        setAddDialogOpen(false);
    }

    return (
        <Dialog open={addDialogOpen}>
            <DialogTitle>Please select size and amount</DialogTitle>
            <DialogContent>
                {textFields.map((textField, index) => (
                    <div key={textField.id}>
                        <TextField
                            label="Shoe Size"
                            value={textField.size}
                            onChange={(e) => handleShoeSizeChange(e, textField.id)}
                            type='text'
                            sx={{m: 1}}
                        />
                        <TextField
                            label="Shoe Amount"
                            value={textField.amount}
                            onChange={(e) => handleShoeAmountChange(e, textField.id)}
                            type='number' InputProps={{
                            inputProps: {min: 0}
                        }}
                            sx={{m: 1}}
                        />
                        {index === textFields.length - 1 && <IconButton onClick={handleAddClick} sx={{mt: 1.8}}>
                            <AddIcon/>
                        </IconButton>}
                    </div>
                ))}
                <Button disabled={disablePopupButtons} sx={{mb: 1, mt: 1.5}} variant="contained" color="primary"
                        onClick={handleAdd}>
                    Add
                </Button>
                <Button disabled={disablePopupButtons} sx={{mb: 1, ml: 1, mt: 1.5}} variant="text"
                        onClick={handleCancelAdd}>
                    Cancel
                </Button>
            </DialogContent>
        </Dialog>
    );
};

interface ShoesAmountPageAddDialogComponentProps {
    addDialogOpen: boolean;
    setAddDialogOpen: Dispatch<SetStateAction<boolean>>;
    addShoesAmount: (shoesAmountList: ShoesAmount[]) => void;
    barcode: string;
}
