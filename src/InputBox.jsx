import React from 'react';
import { Icon, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Remove, Reorder } from '@material-ui/icons';
import EditableMathField from 'react-mathquill';

function InputBox({ value, setValue }) {
    return (
        <div style={{ width: '100%' }}>
            <IconButton>
                <Reorder />
            </IconButton>
            <EditableMathField latex={value} onChange={(mathField) => { setValue(mathField.latex()) }} />
            <IconButton onClick={() => setValue(null)}>
                <Remove />
            </IconButton>
        </div>
    );
}

export default InputBox;