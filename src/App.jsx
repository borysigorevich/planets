import './App.css'
import {Planet} from "./components/Planet";
import {planets} from './mockData'

function App() {

    return (
        <div className='app-wrapper'>
            {planets.map((planet) => (
                <Planet key={planet.id} planet={planet}/>
            ))}
        </div>
    )
}

export default App
