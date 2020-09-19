import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

function InputBox({ children, value, setValue }) {
    return (
        <span style={{ width: '100%' }}>
            {children}
            <TextField value={value} variant='filled' onChange={(e) => setValue(e.target.value)} placeholder="Type here" />
        </span>
    );
}

export default InputBox;