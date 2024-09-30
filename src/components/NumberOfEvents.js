import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(currentNOE);
    
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value)
        if(isNaN(value) || value <= 0) {
            setErrorAlert('Enter a number');
        } else if (value > 32) {
            setErrorAlert('Maximum allowed number is 32');
        } else {
            setErrorAlert('');
            setCurrentNOE(value);
        }
    };

    return (
        <div id="number-of-events">
            <label>
                Number of Events:
            <input 
                type="text"
                value={number}
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
            </label>
        </div>
    )
};

export default NumberOfEvents;