import React from 'react'
import './styles.css'
import {MoonList} from "../MoonList";
import {Circles} from "./components/Circles";

export const Planet = ({planet}) => {

    const [circleCount, setCircleCount] = React.useState(0)

    return (
        <div className='planet-wrapper'>
            <div
                className='planet-box'
                style={{
                    '--circles': circleCount,
                }}
            >
                <div className='planet'>
                    {planet.title} <span className='circle-count'>{circleCount}</span>
                </div>

                <Circles count={circleCount}/>
            </div>

            <MoonList planetId={planet.id} setCircleCount={setCircleCount}/>
        </div>
    );
};
