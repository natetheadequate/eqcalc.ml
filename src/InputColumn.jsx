import React from 'react';
import Panel from './Panel';
import InputPanel from './InputPanel';
import BoxAppender from './BoxAppender';

function InputColumn() {
    return (
        <Panel addable childs={<InputPanel /> } />
        <BoxAppender 
    );
}

export default InputColumn;
