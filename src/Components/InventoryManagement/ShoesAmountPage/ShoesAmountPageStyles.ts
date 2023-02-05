import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        margin: '0 auto',
        paddingBottom: theme.spacing(4)
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
    titleKey: {
        fontWeight: 'bold',
        display: 'inline-block',
        marginRight: theme.spacing(1)
    },
    titleValue: {
        display: 'inline-block'
    },
    textField: {
        margin: theme.spacing(1),
        width: '49%'
    }
}));