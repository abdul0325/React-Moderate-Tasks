import { useState, useEffect } from "react";

function Clock({ textColor }) {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    const colorMap = {
        red: "text-red-500",
        green: "text-green-500",
        yellow: "text-yellow-400",
        blue: "text-blue-500",
        white: "text-white",
        pink: "text-pink-400",
    };
    const textClass = colorMap[textColor.toLowerCase()] || "text-white";
    return (
        <div className="gap-6 m-3">
            <h2 className="text-3xl font-semibold">Clock : </h2>
            <div className={`bg-gray-950 mt-3.5 m-25 w-fit h-37 pt-10 p-5 rounded-4xl text-center justify-center ${textClass}`}>
                <h1 > {time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}
export default Clock