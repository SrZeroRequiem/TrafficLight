import { array } from 'prop-types';
import React, { useState, useEffect } from 'react';

const defaultLights = ["light red", "light yellow", "light green"]
const Light = () => {
    const [classLight, setSelected] = useState([...defaultLights])
    let lightsDiv = []
    function handleLight(e) {
        let lightClicked = e.target.className;
        console.log(lightClicked)
        let arrayHandler = [...classLight]
        for (let index = 0; index < classLight.length; index++) {
            const element = classLight[index];
            if (element.includes(lightClicked) && !(element.includes("selected"))) {
                arrayHandler = [...defaultLights]
                arrayHandler[index] = lightClicked + " selected"
                console.log("First");
                setSelected([...arrayHandler])
                break
            } else if (element.includes("selected") && lightClicked.includes("selected")) {
                console.log("Second");
                setSelected([...defaultLights])
                break
            }

        }
        if (e === true) {
            setSelected([...defaultLights])
            console.log("yes")
        }


    }
    for (let index = 0; index < classLight.length; index++) {
        lightsDiv[index] = <div className={classLight[index]} onClick={handleLight}></div>
    }
    return (lightsDiv)
}
const TrafficLight = () => {
    return (
        <div className="semaforo">
            <Light />
        </div>
    )
}

export default TrafficLight