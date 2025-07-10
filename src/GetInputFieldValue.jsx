import { useState } from "react"
function GetInputFieldValue() {
  const [value, setValue] = useState("")
  return (
    <div>
      <input className="w-[500px] text-[30px] border-4 m-3 " type="text" placeholder="Type" value={value} onChange={(event) => setValue(event.target.value)}></input>
      <h1>{value}</h1>
      <button className="m-3 " onClick={() => setValue("")}>Clear Value</button>
    </div>
  )
}
export default GetInputFieldValue