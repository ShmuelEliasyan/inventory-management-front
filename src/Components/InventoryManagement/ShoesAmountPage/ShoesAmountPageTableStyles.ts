import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    table: {
        boxShadow: '1px 1px 30px grey',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    firstCell: {
        paddingLeft: '5%',
    },
    secondCell: {
        paddingLeft: '10%',
    },
    thirdCell: {
        paddingLeft: '15%',
    },
    tableHeader: {
        fontWeight: 'bold'
    },
    textField: {
        width: '100px'
    },
    visibilityHidden: {
        visibility: 'hidden'
    },
    emptyTableCell: {
        textAlign: 'center',
        color: 'gray'
    }
}));