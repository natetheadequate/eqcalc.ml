import React from 'react';
import Panel from './Panel';
import VarBox from './VarBox';
import Column from './Column';

function VarColumn({ vars, width}) {
    return (
        <Column width={width}>
            <Panel width={width} value={vars} Childs={VarBox} />
        </Column>
    );
}
export default VarColumn;