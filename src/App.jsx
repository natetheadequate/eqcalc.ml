import React, { useState } from 'react';
// import InputColumn from './InputColumn';
import { useMediaQuery } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { green } from '@material-ui/core/colors';
import TopBar from './TopBar';
import SettingsPaper from './SettingsPaper';
import Calculator from './Calculator';

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
            secondary:{
                main: '#888800',
            },
        }
    })
    const [theme, setTheme] = useState({
        palette: {
            primary: undefined
        }
    });
    const [userSelectedDarkOrLightTheme,setUserSelectedDarkOrLightTheme]=useState(createMuiTheme({
        palette:{
            type: undefined
        }
    }))
    const defaultTheme = useMediaQuery('(prefers-color-scheme: dark)') ? defaultThemeDark : defaultThemeLight;// when this line first runs, it is light mode always. Then the media query updates
    const settingsVars={
        defaultTheme,
        userSelectedDarkOrLightTheme:[userSelectedDarkOrLightTheme,setUserSelectedDarkOrLightTheme],
        theme: [theme,setTheme],
    }
    const [settingsPaperOpen, setSettingsPaperOpen] = useState(false);

return (
    <ThemeProvider theme={defaultTheme}>
            <ThemeProvider theme={(outerTheme) => createMuiTheme({
                ...outerTheme,
                palette: {
                    ...outerTheme.palette,
                    primary: theme.palette.primary ? theme.palette.primary : outerTheme.palette.primary
                },
            })}>
                <CssBaseline>
                    <TopBar setSettingsOpen={setSettingsPaperOpen} settingsOpen={settingsPaperOpen} />
                    {(settingsPaperOpen) && <SettingsPaper settingsVars={{settingsVars}} close={() => setSettingsPaperOpen(false)} />}
                    <Calculator />
                </CssBaseline>
            </ThemeProvider>
        </ThemeProvider>
);
}

export default App;
