import React, { useState } from 'react';

import { withStyles, AppBar, Toolbar, Typography, IconButton, Paper } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsPaper from './SettingsPaper';


const styles = {
    SettingsIcon: {
        marginLeft: 'auto'
    }

}
function MyAppBar({ classes, openSettings }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="h1">
                    Gcalc
                </Typography>
                <IconButton onClick={()=>openSettings()} className={classes.SettingsIcon} aria-label="Settings Button">
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(MyAppBar);