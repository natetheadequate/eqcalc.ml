import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Paper } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

function TopBar({ openSettings }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="h1">
                    Gcalc
                </Typography>
                <IconButton style={{ 'margin-left': 'auto' }} onClick={() => openSettings()} aria-label="Settings Button">
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;