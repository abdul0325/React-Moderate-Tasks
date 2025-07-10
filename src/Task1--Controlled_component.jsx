import { useState } from "react"
function DisplayValueUsingConsole() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  function displayValues(input) {
    return <h1>{input.value}</h1>;
  }
  return (
    <div>
      <form method="get">
        <input className="w-[500px] text-[30px] border-4 m-3 " type="text" placeholder="Type" value={name} onChange={(event) => setName(event.target.value)}></input>
        <h1>{name}</h1>
        <input className="w-[500px] text-[30px] border-4 m-3 " type="password" placeholder="Type" value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <h1>{password}</h1>
        <input className="w-[500px] text-[30px] border-4 m-3 " type="email" placeholder="Type" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <h1>{email}</h1>
        <button className="m-3 " onClick={() => { setName(""); setPassword(""); setEmail("") }}>Clear Value</button>
        <button className="m-3 " onClick={() => { setName(""); setPassword(""); setEmail("") }} type="submit">Submit</button>
      </form>

      <h2 className="text-blue-400 w-[500px] text-[30px] m-3 ">Displaying Values Using Function :</h2>
      {displayValues({ value: name })}
      {displayValues({ value: password })}
      {displayValues({ value: email })}
    </div>
  )
}
export default DisplayValueUsingConsole