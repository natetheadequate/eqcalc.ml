import React, { useState } from 'react';
import InputColumn from './InputColumn';
import Resizer from './Resizer';
import VarColumn from './VarColumn';

export default function Calculator() {
    const [inputs, setInputs] = useState(['']);
    const [divider1Position, setDivider1Position] = useState('30%');
    const [divider2Position, setDivider2Position] = useState('10%');
    const inputColumnWidth = divider1Position;
    const varColumnWidth = `calc(${divider2Position} - ${divider1Position})`;
    return (
        <div style={{ height: '100%', width: '100%', display:'flex' }}>
            <InputColumn width={inputColumnWidth} inputs={inputs} setInputs={setInputs} />
            <Resizer setPosition={setDivider1Position} />
            <VarColumn vars={['a','b','c','d']} width={varColumnWidth} />
            <Resizer setPosition={setDivider2Position} />
        </div>
    )
}
