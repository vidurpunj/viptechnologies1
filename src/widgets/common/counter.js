import React, { useEffect, useState } from 'react';

const CommingSoonCounter = ({ time }) => {
    const [counter, setCounter] = useState({
        d: 0,
        h: 0,
        m: 0,
        s: 0
    });

    const timerClock = (secs) => {
        let days = Math.floor(secs / (60 * 60 * 24));
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        return {
            d: days,
            h: hours,
            m: minutes,
            s: seconds
        };
    };

    useEffect(() => {
        const seconds = time ? time : 0;
        const timeset = timerClock(seconds);
        setCounter(timeset);

        const interval = setInterval(() => {
            const updatedSeconds = seconds - 1;

            if (updatedSeconds >= 0) {
                const updatedCounter = timerClock(updatedSeconds);
                setCounter(updatedCounter);
            }

            if (updatedSeconds === 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    const { d, h, m, s } = counter;

    return (
        <ul className="countdown list-inline d-flex justify-content-between">
            <li>
                <span className="days">{d}</span>
                <p className="days_ref">Days</p>
            </li>
            <li>
                <span className="hours">{h}</span>
                <p className="hours_ref">Hours</p>
            </li>
            <li>
                <span className="minutes">{m}</span>
                <p className="minutes_ref">Minutes</p>
            </li>
            <li>
                <span className="seconds">{s < 10 ? `0${s}` : s}</span>
                <p className="seconds_ref">Seconds</p>
            </li>
        </ul>
    );
};

export default CommingSoonCounter;
