import { useState } from "react";


const HookStateExample1 = () => {
    const [name, setName] = useState('mario');
    let [incrementedValue, setIncrementedValue] = useState(1)

    const handleChangeName = () => {
        setName('luigi')
    };

    const handleIncrementMe = () => {
        setIncrementedValue(incrementedValue=+1);
    };

    return (
        <>
            {/* hook  */}
            <h4 className={"mt-3"}>{name}</h4>
            <button onClick={handleChangeName}>Change Name</button>
            <h3 className={'mt-3'}>{incrementedValue}</h3>
            <button onClick={handleIncrementMe}>Increment Me</button>
        </>
    )
}

export default HookStateExample1;