import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '/Column.module.css';

function Column({children}) {
    return (
        <div class="Column">
            {children}
        </div>
    )
}

export default Column;