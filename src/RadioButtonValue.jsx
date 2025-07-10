import { useState } from "react"

function GetRadioButtonValue() {

    const [gender, setGender] = useState([]);
    const [city, setCity] = useState([]);

    const handleChange = (event) => {
        setCity(event.target.value)
    }
    return (
        <div>
            <div className="gap-6 m-3">
                <label className="text-5xl font-semibold mr-2">2. Select Your Gender:</label>
                <div className="flex items-center">
                    <input className="w-[100px]  m-3 size-10 " name="gender" checked={gender === "Male"} onChange={() => setGender("Male")} id="male" value="male" type="Radio" />
                    <label className="text-5xl" htmlFor="male">Male</label>
                </div>
                <div className="flex items-center">
                    <input className="w-[100px]  m-3 size-10 " name="gender" checked={gender === "Female"} onChange={() => setGender("Female")} id="female" value="female" type="Radio" />
                    <label className="text-5xl" htmlFor="female">Female</label>
                </div>
                <h1 className=" p-4 " >Selected Gender : {gender}</h1>
            </div>


            <div className="gap-6 m-3">
                <label className="text-5xl font-semibold mr-2">2. Choose City:</label>
                <select defaultValue={"Lahore"} onChange={handleChange} className="p-2 border rounded-md">
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Lahore">Lahore</option>
                    <option value="karachi">karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Maree">Maree</option>
                    <option value="Sawat">Sawat</option>
                </select>
                <h1 className=" p-4 ">Selected City : {city}</h1>
            </div>
        </div>
    )
}
export default GetRadioButtonValue