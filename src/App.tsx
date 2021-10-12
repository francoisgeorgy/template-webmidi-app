import './App.css'
import {MidiPortsSelect} from "./components/midi/MidiPortsSelect";
import {ExampleMIDIDevices} from "./components/ExampleMIDIDevices";
import {ExampleMIDIMessages} from "./components/ExampleMIDIMessages";

function App() {
    return (
        <div className="App">
            <header>
                <h1>WebMIDI Application</h1>
            </header>
            <div>
                <MidiPortsSelect />
                <ExampleMIDIDevices />
                <ExampleMIDIMessages />
            </div>
        </div>
    )
}

export default App
