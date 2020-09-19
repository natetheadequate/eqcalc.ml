import React, { useState } from 'react';
import InputColumn from './InputColumn';

export default function Calculator() {
    const [inputs, setInputs] = useState(['']);
    const [divider1,setDivider1]=useState('30%');
    const inputColumnWidth=divider1;
    return (
        <div style={{height:'100%',width:'100%'}}>
            <div style={{'width':inputColumnWidth}}><InputColumn inputs={inputs} setInputs={setInputs} /></div>
        </div>
    )
}
