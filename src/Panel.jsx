import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Add, Undo } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function Panel({ addable, value, setValue, Childs }) {
    // The length of value never shrinks nor do elements change order. When an element is blank, it is empty string. When it is removed, it is null 
    /* 
    orderOfValue and previousOrderOfValue are an array of integers representing indexes on the value array that was propdrilled from Calculator. 
    The indexes in orderOfValue are arranged in the order that the elements of value should be rendered to the screen. 
    When onDragEnd, orderOfValue is copied to a new array, the index of the value array of the dragged object is found,
    then that index is moved in the orderOfValue array to where the user dropped it. setOrderOfValue is called with this new array.
    The state is now stored.
    */
    const [previousOrderOfValue, setOrderOfValue] = useState([]);
    /* previousOrderOfValue is used to store the order in which elements of value should be displayed. 
    This includes values that are null and won't be displayed so the undo button will preserve position.
    When a user drags an element to a new position, setOrderOfValue is called so the reorganization persists for another render. */

    // adding any index of value not in previousOrderOfValue gives us orderOfValue
    const orderOfValue = previousOrderOfValue.concat((value.map((v, i) =>
        previousOrderOfValue.indexOf(i) === -1 ? i : null 
    )).filter(v => v !== null));// get rid of all the nulls which replaced indices of value in previousOrderOfValue

    // previousOrderOfValue is no longer needed at this point in the render. order of value is now used. Orderofvalue includes the positions of deleted elements...
    const orderOfDisplayedValue=orderOfValue.filter(v=>value[v]!==null); //... but orderOfDiplayedValues does not
    const [recentlyRemoved, setRecentlyRemoved] = useState([])// stack of previous value of removed elements and index in "value" (the prop)[[v,i],...] 
    const updateAValue = (newValue, i) => {// newvalue is '' by default and null when an input is being removed
        const valu = [...value];
        valu[i] = newValue;
        if (newValue === null) {
            setRecentlyRemoved([...recentlyRemoved, [value[i], i]]);
        }
        setValue(valu);

    }
    const onDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }
        const newOrderOfValue = [...orderOfValue];
        const [draggedId] = newOrderOfValue.splice(
            orderOfValue.indexOf(
                orderOfDisplayedValue[result.source.index] //the index in "value" of the element that the dragged element is being moved above
        ), 1);
        newOrderOfValue.splice(orderOfValue.indexOf(orderOfDisplayedValue[result.destination.index]), 0, draggedId);
        console.debug(newOrderOfValue);
        setOrderOfValue(newOrderOfValue);
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable key='inputs' droppableId='inputs'>{
                    (provided) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                orderOfDisplayedValue.map((indexInValue, DisplayIndex) =>
                                (
                                    <Draggable key={indexInValue.toString()} draggableId={indexInValue.toString()} index={DisplayIndex}>
                                        {(provided) => (
                                            <div style={provided.draggableProps.style} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                <Childs id={indexInValue} key={indexInValue} value={value[indexInValue]} setValue={(newValue) => { updateAValue(newValue, indexInValue) }} />
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
            {(addable || (recentlyRemoved.length > 0)) && (<span style={{ display: 'flex' }}>
                {recentlyRemoved.length > 0 && <Button variant='outlined' color='secondary' onClick={() => updateAValue(...recentlyRemoved.pop())}><Undo /></Button>}
                {addable && <Button variant="contained" color='secondary' style={{ 'flexGrow': '1' }} onClick={() => { updateAValue('', value.length) }}><Add /></Button>}
            </span>)}
        </div>
    )
}
Panel.propTypes = {
    Childs: PropTypes.func.isRequired,
    addable: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(string).isRequired,
}
Panel.defaultProps = {
    addable: false
}

export default Panel;