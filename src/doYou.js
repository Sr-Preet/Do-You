import React, { useState } from 'react';

const DoYou = ({ name }) => {
    const [flag, setFlag] = useState(1)
    const [divStyle, setDivStyle] = useState({})
    const clicked = () => {
        alert(`I Love You Too ${name}`);
    }

    const moveButton = () => {
        if (flag === 1) {
            setDivStyle({top: '90px', left: '500px'})
            setFlag(2)
        }
        else if (flag === 2) {
            setDivStyle({top: '90px', left: '50px'})
            setFlag(3)
        }
        else if (flag === 3) {
            setDivStyle({top: '35%', left: '55%'})
            setFlag(1)
        }
    }
    return (
        <>
            <h1>Do you love me {name}?</h1>
            <div id="By">
                <input type="button" value="YES" onClick={clicked} />
            </div>
            <div id="Bn" style={divStyle}>
                <input type="button" value="NO" onMouseOver={moveButton} />
            </div>

        </>
    );
};

export default DoYou;