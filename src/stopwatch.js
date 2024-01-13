import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        <span>{("0" + hours).slice(-2)}:</span>
        <span>{("0" + minutes).slice(-2)}:</span>
        <span>{("0" + seconds).slice(-2)}</span>
      </div>
      <div>
        {running ? (
          <button onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button onClick={() => setRunning(true)}>Start</button>
        )}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
};

export default Stopwatch;
