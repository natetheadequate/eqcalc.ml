import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

function Resizer({ setPosition, className }) {
    const [beingResized, setBeingResized] = useState(false);
    return (
        <Box className={className} onMouseDown={() => setBeingResized(true)} onMouseMove={(e) => beingResized && setPosition(e.clientX)} />
    );
}

export default styled(Resizer)`
    width:3px;
    min-height:100%;
    background-color:gray;
    cursor:ew-resize;
`;