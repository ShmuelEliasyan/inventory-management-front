import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    spaceBetween: {
        display: "flex",
        justifyContent: "space-between"
    },
    titleContainer: {
        textAlign: 'center',
        marginTop: theme.spacing(2)
    },
    title: {
        textAlign: 'center',
        display: 'inline-block',
        margin: theme.spacing(3)
    },
    titleLeft: {
        display: 'inline-block',
    },
    titleRight: {
        display: 'inline-block'
    },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};