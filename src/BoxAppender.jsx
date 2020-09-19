import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function BoxAppender({ add }) {
    return (
        <Button variant='contained' color='secondary' style={{width:'100%'}} onClick={() => { add() }}>+</Button>
    );
}
BoxAppender.propTypes = {
    add: PropTypes.func.isRequired
}
export default BoxAppender;