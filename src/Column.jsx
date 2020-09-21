import React from 'react';

function Column({ children, width }) {

    return (
        <div style={{ height: '100%', width: width, overflow: 'scroll' }}>
            {children}
        </div>
    );
}

export default Column;