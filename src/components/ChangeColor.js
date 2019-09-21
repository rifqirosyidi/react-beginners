import React, { useState } from 'react';


function changeColor() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isYellow, setYellow] = useState(false);

    const handleChange = () => {
        setYellow(!isYellow)
    }

    return(
        <div className="main-change-color">
            <button onClick={handleChange} >Change the color</button>
            <h4 className={ isYellow ? "colorYellow" : "colorWhite" } >Click the button above to toggle my color</h4>
        </div>
    )
}

export default changeColor
