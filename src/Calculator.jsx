import React, { useState } from 'react';
import InputColumn from './InputColumn';
import Resizer from './Resizer.jsx';

export default function Calculator() {
    const [inputs, setInputs] = useState(['']);
    const ResizerWidth=
    const setDivider1Position=(p)=>{
        if(p>)
    }
    const [divider1Position, trulySetDivider1Position] = useState('30%');
    const [divider2Position, setDivider2Position] = useState('10%');
    const inputColumnWidth = divider1Position;
    const varColumnWidth= divider2Position-divider1Position
    return (
        <div style={{ height: '100%', width: '100%', display:'flex' }}>
            <InputColumn width={inputColumnWidth} inputs={inputs} setInputs={setInputs} />
            <Resizer position={divider1Position} changePosition={setDivider1Position}/>
            <VarColumn width={varColumnWidth} />
            
        </div>
    )
}
