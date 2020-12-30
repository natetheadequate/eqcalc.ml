import React from 'react';
import { Icon, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Remove, Reorder } from '@material-ui/icons';
import { MathfieldComponent } from 'react-mathlive';

function InputBox({ value, setValue, id }) {
    return (
        <span style={{ width: '100%' }}>
            <MathfieldComponent key={id} latex={value} onChange={setValue} />
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