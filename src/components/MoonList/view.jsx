import {moons} from "../../mockData";
import {Moon} from "../Moon";
import './styles.css';

export const MoonList = ({planetId, setCircleCount}) => {
    return (
        <div className='moon-list-wrapper'>
            {moons.filter(moon => moon.planetId === planetId).map(moon => (
                <Moon key={moon.id} moon={moon} setCircleCount={setCircleCount}/>
            ))}
        </div>
    );
};