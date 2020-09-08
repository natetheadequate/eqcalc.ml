import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

const styles={
    'root': {
        width: '300px',
        padding: '10px'
    }
}
function InputBox({classes, value, setValue}) {
    return (
        <span className={classes.root}>
            <TextField value={value} variant='filled' onChange={(e)=>setValue(e.target.value)} placeholder="Type here" />
        </span>
    );
}

export default withStyles(styles)(InputBox);