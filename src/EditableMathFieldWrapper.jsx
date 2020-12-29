import React, { useRef,useImperativeHandle } from 'react';
import { EditableMathField } from 'react-mathquill';

function EditableMathFieldWrapper({inputRef,value, setValue,...props}){
    const thisMathField=useRef();
    React.useImperativeHandle(inputRef,()=>({focus: ()=>{thisMathField.focus();alert('yo')}, }))

    return (<EditableMathField onChange={(mf)=>{setValue(mf.latex())}} latex={value} {...props} />)
}

export default EditableMathFieldWrapper;