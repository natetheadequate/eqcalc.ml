import React from 'react';
import { TextField } from '@material-ui/core';

function InputBox({value, setValue}) {
    return (
        <TextField value={value} variant='filled' onChange={(e)=>setValue(e.target.value)} placeholder="Type here" />
    );
}

export default InputBox;