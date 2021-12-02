import React from 'react';
const BEGIN = 'begin';
const WORKING = 'working';
const BREAK = 'break';
import Box from './boxes';
import EndModal from './endModal'

import Button from './button';
export default function TimerContainer(props){
    const { loggedIn } = props;
    const [stage, setStage] = React.useState(BEGIN)
    const [notes, setNotes] = React.useState('');
    const [grade, setGrade] = React.useState('');
    const [endNotes, setEndNotes] = React.useState('');
    const [startTime, setStartTime] = React.useState();
    const [currentTime, setCurrentTime] = React.useState();
    const secondsElapsed = startTime && currentTime ? (currentTime - startTime) / 1000 : 0;
    // const totalSeconds = 30; // 25 minutes = 1500 seconds
    const totalSeconds = 1500; // 25 minutes = 1500 seconds

    const breakSeconds = 300;
    const remainingSeconds = secondsElapsed ? totalSeconds - secondsElapsed : totalSeconds;



    const getStringForSeconds = (seconds) => {
        if (seconds && seconds === seconds && remainingSeconds) {
            const minutes = String(Math.floor((remainingSeconds) / 60)).padStart(2, '0');
            const seconds = String(Math.floor((remainingSeconds) % 60)).padStart(2, '0');
            return `${minutes}:${seconds}`
        } else {
            return '00:00';
        }
    }
    const handleStart = (time) => {
        setStartTime(time)
        setStage(WORKING);
    };
    const handleStop = () => {
        setStartTime(null)
        setCurrentTime(null)
        setStage(BEGIN)
        // send startTime, endTime, notes, etc.
        // setStartTime to null;
    };

    const handleBreak = () => {
        setStartTime(null)
        setCurrentTime(null)
        setStage(BREAK)
        // setStartTime to null;
    };

    const handleNotes = (e) => {
        setNotes(e.target.value);
    };

    const handleDone = (grade) => {
        // send grade
        // clear grade and endNotes
        setStage(BEGIN);
    }

    React.useEffect(() => {
        if (remainingSeconds <= 0) {
            handleBreak();
        }
    }, [remainingSeconds, handleBreak]);

    React.useEffect(() => {
        // if starttime update difference.
        let interval;

        if (startTime) {
            interval = setInterval(() => {
                setCurrentTime(Date.now());
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [startTime, setCurrentTime]);

    return (
        <>
            <div className={"text-4xl text-green-300"}>{remainingSeconds ? getStringForSeconds(remainingSeconds) : getStringForSeconds(totalSeconds)}</div>
            <Box minutes={remainingSeconds ? Math.floor(remainingSeconds / 60) : 0} />
            <div  className={"flex flex-col justify-items-center pt-4 pb-4 min-h-md relative"}>
                {(stage === BEGIN || stage === BREAK) && <Button type="primary" text="Start" onClick={() => handleStart(Date.now())} />}
                {stage === WORKING && (<Button type="primary" text="Stop" onClick={() => handleStop()} />)}
                    <div class="mb-4 flex items-center">
                        <input className={`appearance-none border border-green-400 rounded-lg m-2 py-2 px-3 bg-green-900 placeholder-green-500 text-green-300 w-full leading-tight`} value={notes} onChange={handleNotes} id="notes" type="text" placeholder="Notes: PR#1337" />
                    </div>

            </div>
            {stage === BREAK && (
                <EndModal notes={notes} done={handleDone} />
                // <div className={"flex flex-col items-center p-5 rounded-lg bg-green-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                //     <p>How did you do?</p>
                //     <div className={"flex"}>
                //     <Button type="primary" onClick={() => setGrade(1)} text='Ugh' />
                //     <Button type="primary" onClick={() => setGrade(2)} text='Ok' />
                //     <Button type="primary" onClick={() => setGrade(3)} text='Great' />
                //     </div>
                //     <p>What did yo udo?</p>
                //     <textarea rows="5" value={endNotes} onChange={setEndNotes} />
                //     <Button type="primary" onClick={() => handleDone()} text='Done' />
                // </div>
            )}
            </>
    )
}
