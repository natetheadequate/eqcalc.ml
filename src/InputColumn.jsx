import React, { useState } from 'react';
import { Column } from './Column.jsx';
import { InputBox } from './input-box.jsx';
import { InputBoxAdder } from './InputBoxAppender.jsx'

function InputColumn(props) {
    return (
        <>
            {props.children}
        </>
    );
}

export { InputColumn }
