import React, {useContext} from 'react';
import PanelContext from './PanelContext';

function BoxAppender() {
    const [,dispatchPanelChildren,appendee]=useContext(PanelContext);
    return ( 
        <button type="button" onClick={()=>{dispatchPanelChildren({type:'add',payload:appendee})}}>+</button>
    );
}

export default BoxAppender;