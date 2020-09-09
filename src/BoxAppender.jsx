import React from 'react';
import PropTypes from 'prop-types';

function BoxAppender({ add }) {
    return (
        <button type="button" onClick={() => { add() }}>+</button>
    );
}
BoxAppender.propTypes = {
        add: PropTypes.func.isRequired
 }
export default BoxAppender;