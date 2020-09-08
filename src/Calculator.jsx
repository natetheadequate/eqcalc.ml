import React, { useState } from 'react';
import InputColumn from './InputColumn';

export default function Calculator() {
    const [inputs, setInputs] = useState(['']);
    return (
        <div>
            <InputColumn inputs={inputs} setInputs={setInputs} />
            <p>{inputs.toString()}</p>
        </div>
    )
}
