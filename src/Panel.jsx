import React, { useCallback, useState, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import { withStyles } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import BoxAppender from './BoxAppender';

const styles = {
    root: {
        maxWidth: 'min-content',
        padding: '5px'
    }
}
function Panel({ classes, addable, value, setValue, Childs }) {
    const updateAValue = useCallback((newValue, i) => {
        setValue(() => {
            const valu = value.concat();// so i can work on a new array not a reference to value which is immutable 
            valu[i] = newValue;  // a removed node is set to null
            return valu;
        })
    }, [value, setValue]);
    const [orderOfValue, setOrderOfValue] = useState([0]);
    useEffect(() => {// when value changes, orderOfValue is updated with new index at then end
        setOrderOfValue(orderOfValue.concat(value.filter((v, i) => {
            return orderOfValue.indexOf(i) === -1;
        })))
    }, [value]);
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const newOrder = orderOfValue.concat();
        const [draggedIndex] = newOrder.splice(result.source.index, 1);// the index according to value that was dragged.
        setOrderOfValue(newOrder.splice(result.destination.index, draggedIndex));
    }
    return (
        <div className={classes.root}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='inputs'>{
                    (provided) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                // this array of draggables is initialized assigned all the values and setters to the value array.
                                // even if the the superficial order changes, the values array order does not change.
                                Array.isArray(orderOfValue.current) && Array.isArray(value) && orderOfValue.current.map((i) => {
                                    /* i represents the index in the value array that is being rendered.
                                        Thus it is possible to reorder the array by changing the order of the indices in the orderOfValues array
                                    */
                                    if (value[i] != null) {
                                        return (<Draggable draggableId={i}>
                                            {(provided2) => (
                                                // eslint-disable-next-line react/jsx-props-no-spreading
                                                <div style={provided2.draggableProps.style} ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}  >
                                                    <Childs key={i} value={value[i]} setValue={(newValue) => { updateAValue(newValue, i) }} />
                                                </div> // null will mean removal
                                            )}
                                        </Draggable>)
                                    } return 'Error';
                                })
                            }
                        </div>
                    )
                }</Droppable>
            </DragDropContext>
            {addable && <BoxAppender add={() => updateAValue('', value.length)} />}
        </div>
    )
}
Panel.propTypes = {
    Childs: PropTypes.func.isRequired,
    addable: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(string).isRequired
}
Panel.defaultProps = {
    addable: false
}

export default withStyles(styles)(Panel);