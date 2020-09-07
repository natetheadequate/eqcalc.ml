import { useState } from 'react';

function GetId() {
    const [UniqueId, setUniqueId] = useState(0);
    const getId = () => {
        setUniqueId(prev => prev + 1);
        return UniqueId.toString();
    }
    return getId();
}
export default GetId;