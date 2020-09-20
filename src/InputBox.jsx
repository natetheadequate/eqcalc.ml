import React from 'react';
import { Icon, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Remove, Reorder } from '@material-ui/icons';

function InputBox({ value, setValue }) {
    return (
        <span style={{ width: '100%' }}>
            <TextField InputProps={{
                startAdornment:
                    <InputAdornment style={{ cursor: 'grab' }} position='start'>
                        <Icon>
                            <Reorder />
                        </Icon>
                    </InputAdornment>,
                endAdornment:
                    <InputAdornment position='end'>
                        <IconButton onClick={()=>setValue(null)}>
                            <Remove />
                        </IconButton>
                    </InputAdornment>
            }} fullWidth value={value} variant='filled' onChange={(e) => setValue(e.target.value)} />
        </span>
    );
}

export default InputBox;