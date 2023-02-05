import {AppBar, Button, Toolbar} from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {useStyles} from "./HeaderStyles";

const HeaderComponent: FC = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button color="inherit" className={classes.button} onClick={() => navigate("/")}>Home</Button>
                <Button color="inherit" className={classes.button} onClick={() => navigate("/shoes-catalog")}>Shoes
                    Catalog</Button>
                <Button color="inherit" className={classes.button} onClick={() => navigate("/inventory-management")}>Inventory
                    Management</Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderComponent;
