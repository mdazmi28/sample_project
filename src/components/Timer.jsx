import { useEffect, useState } from 'react';

const Timer = () => {
    const [days, setDays] = useState(5); // Example start: 5 days
    const [hours, setHours] = useState(23); // Example start: 23 hours
    const [minutes, setMinutes] = useState(59); // Example start: 59 minutes
    const [seconds, setSeconds] = useState(50); // Example start: 50 seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            } else if (minutes > 0) {
                setMinutes((prevMinutes) => prevMinutes - 1);
                setSeconds(59); // Reset seconds to 59 when a minute passes
            } else if (hours > 0) {
                setHours((prevHours) => prevHours - 1);
                setMinutes(59); // Reset minutes to 59 when an hour passes
                setSeconds(59);
            } else if (days > 0) {
                setDays((prevDays) => prevDays - 1);
                setHours(23); // Reset hours to 23 when a day passes
                setMinutes(59);
                setSeconds(59);
            } else {
                // Timer reaches 0 (days, hours, minutes, and seconds all 0)
                clearInterval(intervalId);
            }
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [seconds, minutes, hours, days]);

    return (
        <div className="h-[56px] w-[260px] grid grid-cols-4 gap-2">
            <div className="flex flex-col items-center">
                <h1 className='text-[20px] font-bold'>{days}</h1>
                <h1>Days</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className='text-[20px] font-bold'>{hours}</h1>
                <h1>Hr</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className='text-[20px] font-bold'>{minutes}</h1>
                <h1>Minutes</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1 className='text-[20px] font-bold'>{seconds}</h1>
                <h1>Seconds</h1>
            </div>
        </div>
    );
};

export default Timer;
