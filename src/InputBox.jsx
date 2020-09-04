import React, { useState } from 'react';
import { useContext } from 'react';

function InputBox({id}) {
    const [inputsArray,dispatcher]=useContext(inputsArray);
    return (
        <input value={inputsArray[id] onChange={dispatcher(index, value)}placeholder="Type here" />
    );
}

export default InputBox;