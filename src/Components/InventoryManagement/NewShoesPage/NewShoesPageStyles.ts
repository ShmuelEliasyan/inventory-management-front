import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(4),
    },
    textField: {
        width: '30%',
        marginTop: '5% !important'
    },
    textFieldMargin: {
        marginRight: '5% !important'
    },
    imageUrl: {
        width: '65%',
        marginTop: '3% !important',
    },
    imageUrlBottom: {
        marginBottom: '3% !important',
    },
    button: {
        marginTop: '3% !important'
    },
    secondRowTextField: {
        width: '30%',
        marginTop: '3% !important'
    }
}));