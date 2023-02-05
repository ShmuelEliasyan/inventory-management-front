import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import {
    IconButton,
    TableHead
} from "@mui/material";
import {useStyles} from "./ShoesAmountPageTableStyles";
import CheckIcon from '@mui/icons-material/Check';
import {CircularProgress} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {ShoesAmount} from "../../../Types/Shoes";

const ShoesAmountPageTableComponent: FC<ShoesAmountPageTableComponentProps> = (props: ShoesAmountPageTableComponentProps) => {
    const {shoesAmount, setShoesAmount, updateShoesAmount, deleteRowClicked} = props;

    useEffect(() => {
        setShoesAmountUpdateStatus([]);
    }, [shoesAmount])

    const classes = useStyles();

    const [shoesAmountUpdateStatus, setShoesAmountUpdateStatus] = useState<('loading' | 'updated')[]>([]);

    const handleEdit = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) => {
        const newShoesAmount = [...shoesAmount];
        newShoesAmount[index].amount = event.target.value === '' ? '' : Number(event.target.value);
        setShoesAmount(newShoesAmount);
    }

    const handleUpdateShoesAmount = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) => {
        const newShoesAmount = [...shoesAmount];
        newShoesAmount[index].amount = Number(event.target.value);
        setShoesAmount(newShoesAmount);

        let shoesAmountUpdateStatusLoading = [...shoesAmountUpdateStatus];
        shoesAmountUpdateStatusLoading[index] = 'loading';
        setShoesAmountUpdateStatus(shoesAmountUpdateStatusLoading);

        await updateShoesAmount(newShoesAmount[index]);

        let shoesAmountUpdateStatusUpdated = [...shoesAmountUpdateStatus]
        shoesAmountUpdateStatusUpdated[index] = 'updated';
        setShoesAmountUpdateStatus(shoesAmountUpdateStatusUpdated);
    }

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classNames(classes.firstCell, classes.tableHeader)}></TableCell>
                        <TableCell className={classNames(classes.secondCell, classes.tableHeader)}>Shoes
                            Size</TableCell>
                        <TableCell className={classNames(classes.thirdCell, classes.tableHeader)}>Shoes
                            Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!shoesAmount.length && <TableRow>
                        <TableCell colSpan={6} className={classes.emptyTableCell}>
                            <h3>No records were found</h3>
                        </TableCell>
                    </TableRow>}
                    {shoesAmount && shoesAmount.map((row, index) => (
                        <TableRow key={row.size}>
                            <TableCell className={classes.firstCell}
                                       align="left">
                                <IconButton onClick={() => deleteRowClicked(index)}
                                            sx={{p: 0}}><RemoveCircleOutlineIcon/></IconButton>
                            </TableCell>
                            <TableCell className={classes.secondCell}
                                       align="left">{row.size}</TableCell>
                            <TableCell className={classes.thirdCell}
                                       align="left">
                                <TextField className={classes.textField} type='number' InputProps={{
                                    inputProps: {min: 0}
                                }} value={row.amount}
                                           onChange={(e) => handleEdit(e, index)}
                                           onBlur={(e) => handleUpdateShoesAmount(e, index)}/>

                                <CircularProgress
                                    className={classNames(shoesAmountUpdateStatus[index] !== 'loading' && classes.visibilityHidden)}
                                    size={20} sx={{mt: 0.5}}/>
                                <CheckIcon
                                    className={classNames(shoesAmountUpdateStatus[index] !== 'updated' && classes.visibilityHidden)}
                                    color="primary" sx={{mt: 0.5}}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export interface ShoesAmountPageTableComponentProps {
    setShoesAmount: Dispatch<SetStateAction<ShoesAmount[]>>;
    shoesAmount: ShoesAmount[];

    updateShoesAmount: (shoesAmount: ShoesAmount) => void;

    deleteRowClicked: (index: number) => void;
}

export default ShoesAmountPageTableComponent;
