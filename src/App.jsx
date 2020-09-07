import React, { useState } from 'react';
// import InputColumn from './InputColumn';
import { useMediaQuery } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { green } from '@material-ui/core/colors';
import StyledAppBar from './StyledAppBar';
import SettingsPaper from './SettingsPaper';
import InputColumn from './InputColumn';

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
    const [theme, setTheme] = useState({
        palette: {
            primary: undefined
        }
    });
    const defaultTheme = useMediaQuery('(prefers-color-scheme: dark)') ? defaultThemeDark : defaultThemeLight;// when this line first runs, it is light mode always. Then the media query updates
    const [inputs, setInputs] = useState(['ha','as']);
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
                <StyledAppBar openSettings={() => setSettingsPaperOpen(true)} />
                {(settingsPaperOpen) && <SettingsPaper settings={{ 'theme': [theme, setTheme] }} close={() => setSettingsPaperOpen(false)} />}
                <InputColumn inputs={inputs} setInputs={setInputs} />
            </CssBaseline>
        </ThemeProvider>
    </ThemeProvider>
);
}

export default App;
