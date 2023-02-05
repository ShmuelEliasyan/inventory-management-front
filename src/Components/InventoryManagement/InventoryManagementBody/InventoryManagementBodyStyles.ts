import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '20%'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageGrid: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    imageGridHover: {
        boxShadow: '1px 1px 30px grey',
        cursor: 'pointer'
    }
}));