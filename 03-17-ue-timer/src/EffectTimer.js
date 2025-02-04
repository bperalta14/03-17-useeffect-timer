import React, { useState, useEffect } from 'react';

function EffectTimer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <p>Seconds: {seconds}</p>
        </div>)
}

export default EffectTimer;
