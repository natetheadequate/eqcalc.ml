import React from 'react';
import EditableMathField from 'react-mathquill';

function InputBox({ value, setValue }) {
    return (
        <div>
            <EditableMathField latex={value} onChange={(mathField) => { setValue(mathField.latex()) }} />
        </div>
    );
}

export default InputBox;