import React from 'react'
import { useState } from 'react'

const Toggle = () => {

    const [isOn, setIsOn] = useState(true);

    return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>

}

export default Toggle;