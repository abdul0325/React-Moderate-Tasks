function ReuseComponentUsingLoop({ data }) {

    return (
        <div className=" border-stone-600 bg-blue-200 border-4 p-5 w-2xl m-6  rounded-3xl shadow">
            <h2 className="text-4xl font-semibold">ID : {data.Id}</h2>
            <h2 className="text-4xl font-semibold">Name : {data.Name}</h2>
            <h2 className="text-4xl font-semibold">Age : {data.Age}</h2>
            <h2 className="text-4xl font-semibold">Email : {data.Email}</h2>
        </div>
    )
}
export default ReuseComponentUsingLoop