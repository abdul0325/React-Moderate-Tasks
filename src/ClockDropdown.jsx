import { useState } from "react";

function ClockDropdown({ onColorChange }) {
    const [color, setColor] = useState([]);
    function handleChange(e) {
        const selected = e.target.value;
        setColor(selected);
        onColorChange(selected);
    }

    return (
        <div className="gap-6 m-3">
            <label className="text-5xl font-semibold mr-2">Choose Color : </label>
            <select defaultValue={"White"} onChange={handleChange} className="p-2 border rounded-md">
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
                <option value="Pink">Pink</option>
            </select>
            <h2 className="text-3xl font-semibold">Selected Color : {color}</h2>
        </div>
    )
}
export default ClockDropdown