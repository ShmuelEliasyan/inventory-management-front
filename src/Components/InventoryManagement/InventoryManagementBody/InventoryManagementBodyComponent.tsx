import React, {FC, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {useStyles} from "./InventoryManagementBodyStyles";
import classNames from "classnames";
import manageShoesAmount from "../../../Assets/InventoryManagement/manageShoesAmount.jpg"
import addNewShoes from "../../../Assets/InventoryManagement/addNewShoes.jpg"

const InventoryManagementBodyComponent: FC<InventoryManagementBodyComponentProps> = (props: InventoryManagementBodyComponentProps) => {
    const {onShoesAmountClicked, onNewShoesClicked} = props;

    const classes = useStyles();

    const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid className={classNames(classes.imageGrid, hoveredCardIndex === 1 ? classes.imageGridHover : '')}
                      item xs={4}
                      onMouseOver={() => setHoveredCardIndex(1)}
                      onMouseOut={() => setHoveredCardIndex(-1)}>
                    <img
                        alt="Shoes Amount"
                        className={classes.image}
                        onClick={() => {
                            onNewShoesClicked();
                        }}
                        src={addNewShoes}
                    />
                </Grid>
                <Grid className={classNames(classes.imageGrid, hoveredCardIndex === 2 ? classes.imageGridHover : '')}
                      item xs={4}
                      onMouseOver={() => setHoveredCardIndex(2)}
                      onMouseOut={() => setHoveredCardIndex(-1)}>
                    <img alt="Manage Shoes Amount"
                         className={classes.image}
                         onClick={() => {
                             onShoesAmountClicked();
                         }}
                         src={manageShoesAmount}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

interface InventoryManagementBodyComponentProps {
    onShoesAmountClicked: () => void;
    onNewShoesClicked: () => void;
}

export default InventoryManagementBodyComponent;
