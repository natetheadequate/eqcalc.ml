import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import BoxAppender from './BoxAppender'
import PanelContext from './PanelContext';
import styles from './Panel.module.css';
import { useState } from 'react';

function ChildManager({state, action,defaultpayload}) {
    if(defaultpayload) {const defaultpayload=useState(defaultpayload);}
    const [availableIndexes,setAvailableIndexes]=useState([]);
    switch (action.type) {
        case 'remove':
            availableIndexes.push(action.payload.index)
        case 'add':
            return [state, action.payload. || defaultpayload.props=availableIndexes[0]||values.length];
        case 'set':
            return [action.payload || defaultpayload];
        default:
            return "aerr";

    }
}
function Panel({ childs, addable, value}) {//value is the current value of just this panel and a fn to change just this panels value
    /* 
   <s> So I could make there be a function that allows the panelChildren to get a reindex. The indexes of each are stored in a variable here so they can be reindexed if an input box is knocked off
    why does the index matter the display doesnt have to mirror the way things are arranged back here
    just have an array which stores the input values and when a new one is added, it goes on the end, regardless of if there is a new spot.
    or i could make a stack of removed indeces that is read for the first element (latest removed) and then chuck it there. Regardless, its display place should be just 
    have array cleaning be a task pushed to the event loop, but otherwise gut the index when the element is deleted</s>
    
    no just make everything cosmetic on the outside even the center column
    */
    const [values,setValues]=value?value:useState([]);
    const updateAValue=({newvalue,index})=>{
        setValues(values.map((value,i)=>{
            i==index?newvalue:value;
        }))
    }
    const [panelChildren, dispatchPanelChildren] = useReducer(ChildManager({defaultpayload:<InputBox />}), childs);
    //panel children can be an object of different things. Thus it can transmit messages like index

    return ( 
        <div className={styles.a}>
            {values.map(v,i=>
                <childs changeValue={(newValue)=>{updateAValue(newValue,i)} }/>//null will mean removal
            )}
            <BoxAppender add={updateMyValue('',values.length)} />
        </div>
    )
}
Panel.propTypes = {
    childs: PropTypes.element.isRequired,
    addable: PropTypes.bool
}
Panel.defaultProps = {
    addable: false
}

export default Panel