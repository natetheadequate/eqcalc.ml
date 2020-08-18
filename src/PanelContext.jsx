import React from 'react';

const PanelContext = React.createContext({
    panelChildren: undefined,
    setPanelChildren: ()=>{throw new Error("undefPanelContext-setPanelChildren")},
    resetPanelChildren: ()=>{throw new Error("undefPanelContext-resetPanelChildren")},
    addPanelChildren: ()=>{throw new Error("adf")}
})

export default PanelContext;