import GetInputFieldValue from "./GetInputFieldValue"
import DisplayValueUsingConsole from "./Task1--Controlled_component"
import GetCheckboxValue from "./GetCheckboxValue"
import GetRadioButtonValue from "./RadioButtonValue"
import ArrayOfObject from "./ArrayOfObject"
import ReuseComponentUsingLoop from "./ReuseComponentUsingLoop"
import ClockDropdown from "./ClockDropdown"
import Clock from "./Clock"
import { useState } from "react"

function App() {
  const [textColor, setTextColor] = useState("white");

  const usersData = [
    {
      Name: "Rehman",
      Age: "19",
      Email: "Rehman@test.com",
      Id: "1",
    },
    {
      Name: "Ahmad",
      Age: "24",
      Email: "Ahmad@test.com",
      Id: "2",
    },
    {
      Name: "Hussain",
      Age: "10",
      Email: "Hussain@test.com",
      Id: "3",
    },
    {
      Name: "Muneeb",
      Age: "20",
      Email: "Muneeb@test.com",
      Id: "4",
    },
    {
      Name: "Usman",
      Age: "21",
      Email: "Usman@test.com",
      Id: "4",
    }
  ]

  return (
    <div className="gap-6 m-3">
      <h1 className="text-purple-600 m-3" >1 : Get Input Field Value :- </h1>
      <GetInputFieldValue />
      <hr />
      <h1 className="text-purple-600 m-3">2 : Task 1 -- Controlled Component :- </h1>
      <DisplayValueUsingConsole />
      <hr />
      <h1 className="text-purple-600 m-3" >3 : Get the Checkbox Value & Stored in State :- </h1>
      <GetCheckboxValue />
      <hr />
      <h1 className="text-purple-600 m-3" >3 : Get the Radio Checkbox value & Stored in State :- </h1>
      <GetRadioButtonValue />
      <hr />
      <h1 className="text-purple-600 m-3" >4 : Array of Object Using Map Function :- </h1>
      <ArrayOfObject />
      <hr />
      <h1 className="text-purple-600 m-3" >5 : Re-Use Component in loop Using  Map Function :- </h1>
      {
        usersData.map((users, Id) => (
          <div key={Id}>
            <ReuseComponentUsingLoop data={users} />
          </div>
        ))}
      <hr />
      <h1 className="text-purple-600 m-3" >6 : Task 2 -- Change Color of "Clock" on Dropdown using Props :- </h1>
      <ClockDropdown onColorChange={setTextColor} />
      <Clock textColor={textColor} />
      <hr />
    </div>
  )
}
export default App