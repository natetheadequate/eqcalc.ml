import React, { useState } from 'react';
// import InputColumn from './InputColumn';
import { useMediaQuery, Typography, AppBar, Switch } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightBlue, teal, orange, pink, yellow, green, lightGreen } from '@material-ui/core/colors';
import StyledAppBar from './StyledAppBar';
import SettingsPaper from './SettingsPaper';

function App() {
    const defaultThemeLight = createMuiTheme({
        palette: {
            type: 'light',
            primary: green
        }
    })
    const defaultThemeDark = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#283593',
            },
        }
    })
    const themeOptions={
        palette:{
            primary: null,
            secondary: null,
            type: null
        }
    }
    const [theme, setTheme] = useState({
        palette: {
            primary: undefined
        }
    });
    const defaultTheme = useMediaQuery('(prefers-color-scheme: dark)') ? defaultThemeDark : defaultThemeLight;// when this line first runs, it is light mode always. Then the media query updates
    const settings = [
        {
            Theme: {
                name: 'Dark Mode',
                options: 'switch',// other option is checkbox, color or object of options
                value: {theme.palette.type} 
            }
        }
    ]
    const [settingsPaperOpen, setSettingsPaperOpen] = useState(false);
    return (
        <ThemeProvider theme={defaultTheme}>
            <ThemeProvider theme={(outerTheme) => createMuiTheme({
                ...outerTheme,
                palette: {
                    ...outerTheme.palette,
                    primary: theme.palette.primary ? theme.palette.primary : outerTheme.palette,
                    secondary: theme.palette.secondary ?
                },
            })}>
                <CssBaseline>
                    <StyledAppBar openSettings={() => setSettingsPaperOpen(true)} />
                    {(settingsPaperOpen) && <SettingsPaper settings={settings} close={() => setSettingsPaperOpen(false)} />}
                </CssBaseline>
            </ThemeProvider>
        </ThemeProvider>
    );
}

export default App;
