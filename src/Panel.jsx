import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import BoxAppender from './BoxAppender'
import PanelContext from './PanelContext';

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            console.log(state);
            return [state,action.payload];
        default:
    return "aerr";

}
}
function Panel({ childs }) {
    const [panelChildren, dispatchPanelChildren] = useReducer(reducer, childs);

    return (
        <div>
            <PanelContext.Provider value={[panelChildren, dispatchPanelChildren, childs]} >
                <p>hi</p>
                {panelChildren}
                <BoxAppender />
            </PanelContext.Provider>
        </div>
    )
}
Panel.propTypes = {
    childs: PropTypes.element.isRequired,
}

export default Panel