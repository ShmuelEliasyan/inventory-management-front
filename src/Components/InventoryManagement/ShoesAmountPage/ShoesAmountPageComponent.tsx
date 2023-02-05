import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle
} from "@mui/material";
import {useStyles} from "./ShoesAmountPageStyles";
import ShoesAmountPageTableComponent from "./ShoesAmountPageTableComponent";
import {ShoesAmountPageAddDialogComponent} from "./ShoesAmountPageAddDialogComponent";
import {ShoesAmount} from "../../../Types/Shoes";

const ShoesAmountPageComponent: FC<ShoesAmountPageComponentProps> = (props: ShoesAmountPageComponentProps) => {
    const {
        imageUrl,
        name,
        sizes,
        shoesAmount,
        updateShoesAmount,
        deleteShoesAmount,
        addShoesAmount,
        barcode,
        setShoesAmount
    } = props;

    const classes = useStyles();

    const [deleteRowPopupOpen, setDeleteRowPopupOpen] = useState(false);
    const [disablePopupButtons, setDisablePopupButtons] = useState(false);
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [deleteRowIndex, setDeleteRowIndex] = useState(-1);

    const deleteRowClicked = (index: number) => {
        setDeleteRowIndex(index);
        setDeleteRowPopupOpen(true);
    }

    const handleCancelDelete = () => {
        setDeleteRowIndex(-1);
        setDeleteRowPopupOpen(false);
    }

    const handleApproveDelete = async () => {
        setDisablePopupButtons(true);

        await deleteShoesAmount(shoesAmount[deleteRowIndex]);

        const newShoesAmount = [...shoesAmount];
        newShoesAmount.splice(deleteRowIndex, 1);
        setShoesAmount(newShoesAmount);

        setDeleteRowIndex(-1);
        setDeleteRowPopupOpen(false);
    }

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <div className={classes.title}>
                    <Typography variant="h6" className={classes.titleKey}>
                        Shoes Name:
                    </Typography>
                    <Typography variant="h6" className={classes.titleValue}>
                        {name}
                    </Typography>
                </div>
                {sizes &&
                    <div className={classes.title}>
                        <Typography variant="h6" className={classes.titleKey}>
                            Shoes Sizes:
                        </Typography>
                        <Typography variant="h6" className={classes.titleValue}>
                            {sizes}
                        </Typography>
                    </div>}
            </div>

            {imageUrl && <Image src={imageUrl} alt="Image" aspectRatio={(16 / 12)}/>}

            <ShoesAmountPageTableComponent deleteRowClicked={deleteRowClicked}
                                           shoesAmount={shoesAmount}
                                           setShoesAmount={setShoesAmount}
                                           updateShoesAmount={updateShoesAmount}/>

            <Button variant="contained" fullWidth onClick={() => setAddDialogOpen(true)}>Add a new row</Button>

            <Dialog open={deleteRowPopupOpen} fullWidth>
                <DialogTitle sx={{mt: 1}}>Are you sure that you want to delete this row?</DialogTitle>
                <DialogContent>
                    <Button disabled={disablePopupButtons} sx={{mb: 1}} variant="contained" color="primary"
                            onClick={handleApproveDelete}>
                        Approve
                    </Button>
                    <Button disabled={disablePopupButtons} sx={{mb: 1, ml: 1}} variant="text"
                            onClick={handleCancelDelete}>Cancel</Button>
                </DialogContent>
            </Dialog>

            <ShoesAmountPageAddDialogComponent addDialogOpen={addDialogOpen} setAddDialogOpen={setAddDialogOpen}
                                               addShoesAmount={addShoesAmount} barcode={barcode}/>

        </div>
    );
};

export interface ShoesAmountPageComponentProps {
    name: string;
    sizes: string;
    imageUrl: string;

    shoesAmount: ShoesAmount[];

    updateShoesAmount: (shoesAmount: ShoesAmount) => void;

    deleteShoesAmount: (shoesAmount: ShoesAmount) => void;

    addShoesAmount: (shoesAmountList: ShoesAmount[]) => void;

    barcode: string;

    setShoesAmount: Dispatch<SetStateAction<ShoesAmount[]>>;
}

export default ShoesAmountPageComponent;
