import { useState } from "react"

function GetCheckboxValue() {

     const [skills, setSkills] = useState([]);
     const handleSkills = (event) => {
          if (event.target.checked) {
               setSkills([...skills, event.target.value])
          } else {
               setSkills([...skills.filter((item) => item != event.target.value)])
          }
     }
     return (<div className="gap-6 m-3">
          <h1>Select your Skills: </h1>
          <div className="flex items-center">
               <input className="w-[100px]  m-3 size-10 " onChange={handleSkills} id="java" value="java" type="Checkbox" />
               <label className="text-5xl" htmlFor="java">Java</label>
          </div>
          <div className="flex items-center">
               <input className="w-[100px]  m-3 size-10 " onChange={handleSkills} id="python" value="python" type="Checkbox" />
               <label className="text-5xl" htmlFor="python">Python</label>
          </div>
          <div className="flex items-center">
               <input className="w-[100px]  m-3 size-10 " onChange={handleSkills} id="go" value="go" type="Checkbox" />
               <label className="text-5xl" htmlFor="go">GO</label>
          </div>
          <div className="flex items-center">
               <input className="w-[100px]  m-3 size-10 " onChange={handleSkills} id="php" value="php" type="Checkbox" />
               <label className="text-5xl" htmlFor="php">PHP</label>
          </div>
          <div className="flex items-center">
               <input className="w-[100px]  m-3 size-10 " onChange={handleSkills} id="js" value="js" type="Checkbox" />
               <label className="text-5xl" htmlFor="js">JS</label>
          </div>
          <div className="flex items-center">
               <input className="w-[100px]  m-3 size-10 " onChange={handleSkills} id="node" value="node" type="Checkbox" />
               <label className="text-5xl" htmlFor="node">NODE</label>
          </div>
          <div className="mx-9 flex items-center">
               <h1 className=" p-4 border-5 border-blue-300" >{skills.toString()}</h1>
          </div>
     </div>)
}
export default GetCheckboxValue