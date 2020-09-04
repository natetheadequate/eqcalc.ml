import React from 'react';

import { withStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings'


const styles = {
    SettingsIcon: {
        marginLeft: 'auto'
    }

}
function MyAppBar(props) {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="h1">
                    Gcalc
                </Typography>
                <IconButton className={classes.SettingsIcon} aria-label="Settings Button">
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(MyAppBar);