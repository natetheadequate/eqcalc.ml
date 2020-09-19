import React from 'react';
import Panel from './Panel';
import InputBox from './InputBox';

function InputColumn({ inputs, setInputs }) {
    return (
        <Panel addable value={inputs} setValue={setInputs} Childs={InputBox} />
    );
}
export default InputColumn;
