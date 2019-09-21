import React, { useState } from 'react';


function IncrementCounter() {
    
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div className="main-app" style={{ marginTop: 20 }} >
            <button onClick={increment} >Increment</button>
            <p className="colorWhite">{ count }</p>
        </div>
    )
}

export default IncrementCounter
