import React from 'react';
import Panel from './Panel';
import InputBox from './InputBox';
import Column from './Column';

function InputColumn({ inputs, setInputs, width}) {
    return (
        <Column width={width}>
            <Panel width={width} addable value={inputs} setValue={setInputs} Childs={InputBox} />
        </Column>
    );
}
export default InputColumn;
