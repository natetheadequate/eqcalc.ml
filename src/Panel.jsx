import React, { useState, useRef, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import { withStyles } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import BoxAppender from './BoxAppender';

const styles = {
    root: {
        maxWidth: 'min-content',
        padding: '5px'
    },
    inputDiv: {
    }
}
function Panel({ classes, addable, value, setValue, Childs }) {
    /* 
    orderOfValue is an array of integers representing indexes on the value prop array. 
    The indexes in orderOfValue are arranged in the order that the elements of value should be rendered to the screen. 
    When onDragEnd, orderOfValue is copied to a new array, the index of the value array of the dragged object is found,
    then that index is moved in the orderOfValue array to where the user dropped it. setOrderOfValue is called with this new array.
    The state is now stored.
    */
    const [previousOrderOfValue, setOrderOfValue] = useState([]);// this remains even when props are reloaded, so when you add a new value, all the previous reordering doesn't go away
    const orderOfValue = previousOrderOfValue.concat(Array.from((value.filter((v, i) =>// i want to take into account the previous order of value and any changes to the value array.
        previousOrderOfValue.indexOf(i) === -1 // if the specified index of value doesnt already have a placement, then its key is appended to the end of previousorderofvalue. 
    )).keys()));
    const updateAValue = (newValue, i) => {
        const valu = value.concat();// so i can work on a new array not a reference to value which is immutable 
        valu[i] = newValue;  // a removed node is set to null
        console.debug(`setting value from ${value} to ${valu} because ${valu[i]} at ${i} is now ${newValue}`);
        setValue(valu);
    }
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const newOrder = orderOfValue.concat();
        const [draggedIndex] = newOrder.splice(result.source.index, 1);// the index according to value that was dragged.
        console.debug(`changing order from ${orderOfValue} to ${newOrder.splice(result.destination.index, draggedIndex)} with draggedindex ${draggedIndex}`)
        setOrderOfValue(newOrder.splice(result.destination.index, draggedIndex));
    }

    return (
        <div className={classes.root}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable key='inputs' droppableId='inputs'>{
                    (provided) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                // this array of draggables is initialized assigned all the values and setters to the value array.
                                // even if the the superficial order changes, the values array order does not change.
                                orderOfValue.map((indexInValue, indexDisplayed) => {
                                    /* i represents the index in the value array that is being rendered.
                                        Thus it is possible to reorder the array by changing the order of the indices in the orderOfValues array
                                    */
                                    console.debug(indexInValue);
                                    console.debug(indexDisplayed);
                                    if (value[indexInValue] != null) {
                                        return (<Draggable key={indexInValue} draggableId={indexInValue} index={indexDisplayed}>
                                            {(provided) => (
                                                // eslint-disable-next-line react/jsx-props-no-spreading
                                                <div style={provided.draggableProps.style} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={classes.inputDiv} >
                                                    <Childs key={indexInValue} value={value[indexInValue]} setValue={(newValue) => { updateAValue(newValue, indexInValue) }} />
                                                    <button type="button" onClick={() => { console.debug(indexInValue); console.debug(indexDisplayed); console.debug(orderOfValue) }}>asdf</button>
                                                </div> // null will mean removal
                                            )}
                                        </Draggable>)
                                    } return `Error ${value[indexInValue]}`;
                                })
                            }
                        </div>
                    )
                }</Droppable>
            </DragDropContext>
            <p> PreviousOrderOfValue= {previousOrderOfValue} </p>
            <p>Orderof Value= {orderOfValue}</p><button onClick={() => console.debug(orderOfValue)}>sdf</button>
            <p>value is{value}</p>
            {addable && <BoxAppender add={() => updateAValue('', value.length)} />}
        </div>
    )
}
Panel.propTypes = {
    Childs: PropTypes.func.isRequired,
    addable: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.array.isRequired
}
Panel.defaultProps = {
    addable: false
}

export default withStyles(styles)(Panel);