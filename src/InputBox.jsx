import React from 'react';
import { InputAdornment, TextField, withStyles } from '@material-ui/core';

function InputBox({ children, value, setValue }) {
    return (
        <span style={{ width: '100%' }}>
            <TextField InputProps={{startAdornment: <InputAdornment style={{cursor:'grab'}} position='start'>{children}</InputAdornment> }}fullWidth value={value} variant='filled' onChange={(e) => setValue(e.target.value)} placeholder="Type here" />
        </span>
    );
}

export default InputBox;