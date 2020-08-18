import React, { useState } from 'react';
import { BoxAppender } from './BoxAppender';

function Column(props) {
    const [children, setChildren] = useState(props.children);
    return (
        <div>
            {children}
            <button type="button" onClick={props.setInput("hi")}>Test</button>
            {props.userAddable}
        </div>
    )
}

export { Column }