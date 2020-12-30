import React, { useState } from 'react';
import { EditableMathField } from 'react-mathquill';

function Panel({ value, setValue }) {

    const updateAValue = (newValue, i) => {
        const valu = [...value];
        valu[i] = newValue;
        setValue(valu);

    }

    return (
        <div>
            {value.map((v, i) => (
                <div>
               {/*  <EditableMathField latex={v} onChange={(mathField) => { updateAValue(mathField.latex(), i) }} /> */}
                <input value={v} onChange={(mathField) => { updateAValue(mathField.target.value, i) }} />
                </div>
            ))}
        </div>

    )
}
export default Panel;