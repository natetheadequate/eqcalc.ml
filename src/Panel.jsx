import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Add, Undo } from '@material-ui/icons';
import {Button} from '@material-ui/core';

function Panel({ addable, value, setValue, Childs, width }) {
    /* 
    orderOfValue and previousOrderOfValue are an array of integers representing indexes on the value array that was propdrilled from Calculator. 
    The indexes in orderOfValue are arranged in the order that the elements of value should be rendered to the screen. 
    When onDragEnd, orderOfValue is copied to a new array, the index of the value array of the dragged object is found,
    then that index is moved in the orderOfValue array to where the user dropped it. setOrderOfValue is called with this new array.
    The state is now stored.
    */
    const [previousOrderOfValue, setOrderOfValue] = useState([]);
    /* previousOrderOfValue is used to store past reorganization. 
    When a user drags an element to a new position, setOrderOfValue is called so the reorganization persists for another render. */

    const orderOfValue = previousOrderOfValue.concat((value.map((v, i) =>
        previousOrderOfValue.indexOf(i) === -1 ? i : null // adding any indexes of value not in previousOrderOfValue to the end of orderOfValue (if a new Childs was added)
    )).filter(v => v !== null));// don't include indexes which correspond to null values. That means they were removed
    // previousOrderOfValue is no longer needed

    const [recentlyRemoved, setRecentlyRemoved] = useState([])// stack of previous value of removed elements and index[[v,i],...] 
    const updateAValue = (newValue, i) => {// newvalue is '' by default and null when an input is being removed
        const valu = [...value];
        valu[i] = newValue;
        if (newValue === null) {
            setRecentlyRemoved([ ...recentlyRemoved, [value[i], i]]);
        }
        setValue(valu);

    }
    const onDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }
        const newValue = [...orderOfValue];
        const [draggedId] = newValue.splice(result.source.index, 1);
        newValue.splice(result.destination.index, 0, draggedId);
        setOrderOfValue(newValue);
    }

    return (
        <div style={{height:'100%',width:width}}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable key='inputs' droppableId='inputs'>{
                    (provided) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                orderOfValue.filter((indexInValue)=>value[indexInValue]!==null).map((indexInValue, DisplayIndex) =>
                                    (
                                        <Draggable key={indexInValue.toString()} draggableId={indexInValue.toString()} index={DisplayIndex}>
                                            {(provided) => (
                                                <div style={provided.draggableProps.style} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                    <Childs key={indexInValue} value={value[indexInValue]} setValue={(newValue) => { updateAValue(newValue, indexInValue) }} />
                                                </div> // null will mean removal
                                            )}
                                        </Draggable>
                                    )
                                )
                            }
                            {provided.placeholder}
                        </div>
                    )
                }</Droppable>
            </DragDropContext>
            {(addable || (recentlyRemoved.length>0)) && (<span style={{display:'flex'}}> 
                {recentlyRemoved.length>0 && <Button variant='outlined' color='secondary'  onClick={()=>updateAValue(...recentlyRemoved.pop())}><Undo /></Button>}
                {addable && <Button variant="contained" color='secondary' style={{'flexGrow':'1'}} onClick={() => { updateAValue('', value.length) }}><Add /></Button>}
            </span>)}
        </div>
    )
}
Panel.propTypes = {
    Childs: PropTypes.func.isRequired,
    addable: PropTypes.bool,
    setValue: PropTypes.func,
    value: PropTypes.arrayOf(string).isRequired,
}
Panel.defaultProps = {
    addable: false,
    setValue: ()=>console.log("No setValue function provided")
}

export default Panel;