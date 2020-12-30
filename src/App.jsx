import React, { useState } from 'react';
import Panel from './Panel';
import { addStyles } from 'react-mathquill'

function App() {
    addStyles();
    const [value, setValue] = useState(['a', 'b']);

    return (<Panel value={value} setValue={setValue} />
    );
}

export default App;
