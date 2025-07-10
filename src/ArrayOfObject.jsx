function ArrayOfObject() {
  const userData = [
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
    <div className="m-6 overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 rounded-md shadow-md">
        <thead className="bg-green-200 text-gray-700 font-semibold">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Age</th>
            <th className="border px-4 py-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className="even:bg-green-50 hover:bg-green-100">
              <td className="border px-4 py-2">{user.Id}</td>
              <td className="border px-4 py-2">{user.Name}</td>
              <td className="border px-4 py-2">{user.Age}</td>
              <td className="border px-4 py-2">{user.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
export default ArrayOfObject