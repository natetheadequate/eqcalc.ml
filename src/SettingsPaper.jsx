import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const styles = {
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
}
function SettingsPaper({ close }) {

    return (
        <Button onClick={()=>close()} className="root">Hello</Button>
    );
}

export default withStyles(styles)(SettingsPaper);