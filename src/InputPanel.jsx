import React from 'react';
import Panel from './Panel';
import InputBox from './InputBox';

function InputPanel({value, setValue}) {

    return (
        <Panel value={value} setValue={setValue} addable Childs={InputBox} />
    );
}

export default InputPanel