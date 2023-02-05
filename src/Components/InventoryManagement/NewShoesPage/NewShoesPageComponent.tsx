import React, {useState} from 'react';
import {TextField, Button, Typography} from '@mui/material';
import Image from 'material-ui-image';
import classNames from "classnames";
import {useStyles} from "./NewShoesPageStyles";
import {Shoes} from "../../../Types/Shoes";

const NewShoesPageComponent: React.FC<NewShoesPageComponentProps> = (props: NewShoesPageComponentProps) => {
    const {addNewShoes} = props;

    const classes = useStyles();
    const [sizes, setSizes] = useState('');
    const [barcode, setBarcode] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [costStr, setCostStr] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let cost = Number(costStr);
        const shoes: Shoes = {sizes, name, imageUrl, barcode, cost};
        await addNewShoes(shoes);
    };

    return (
        <div className={classes.form}>
            <Typography variant="h5">Add New Shoes</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    className={classNames(classes.textField, classes.textFieldMargin)}
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    className={classNames(classes.textField, classes.textFieldMargin)}
                    label="Sizes"
                    value={sizes}
                    onChange={(e) => setSizes(e.target.value)}
                />
                <TextField
                    required
                    className={classes.textField}
                    label="Barcode"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                />
                <TextField
                    type="number"
                    className={classNames(classes.secondRowTextField, classes.textFieldMargin)}
                    label="Cost"
                    value={costStr}
                    onChange={(e) => setCostStr(e.target.value)}
                />
                <TextField
                    className={classNames(classes.imageUrl, imageUrl && classes.imageUrlBottom)}
                    label="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                {imageUrl && <Image src={imageUrl} alt="Image" aspectRatio={(16 / 12)}/>}
                <Button variant="contained" fullWidth className={classes.button} type="submit">Submit</Button>
            </form>
        </div>
    );
};

interface NewShoesPageComponentProps {
    addNewShoes: (shoesToAdd: Shoes) => Promise<void>;
}

export default NewShoesPageComponent;