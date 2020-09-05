import React from 'react';
import { withStyles, Button, IconButton, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';

const styles = {
    root: {
        float: 'right',
        width: '80%'
    },
    closeButton: {
        float: 'right',
    }
}
function SettingsPaper({ classes, close, settings }) {

    return (
        <Paper className={classes.root}>
            <IconButton onClick={() => close()} variant='secondary' className={classes.closeButton}>
                <CloseIcon />
            </IconButton>
        </Paper >
    );
}

export default withStyles(styles)(SettingsPaper);