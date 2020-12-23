import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/CloseSharp';

function TopBar({ setSettingsOpen,settingsOpen }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="h1">
                    EqCalc
                </Typography>
                <IconButton style={{ marginLeft: 'auto' }} onClick={() => setSettingsOpen(!settingsOpen)} aria-label="Settings Button">
                    {settingsOpen || <SettingsIcon />}
                    {settingsOpen && <CloseIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
