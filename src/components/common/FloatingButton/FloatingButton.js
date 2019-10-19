import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function FloatingButton(props) {
    const classes = useStyles();

    return (
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={(value) => props.onClick(value)}>
            <Search/>
        </Fab>
    );
};

export {FloatingButton};
