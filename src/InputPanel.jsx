import React from 'react';
import Panel from './Panel';
import InputBox from './InputBox';

function InputPanel() {

    return (
        <Panel addable childs={<InputBox/>} />
    );
}

export default InputPanel