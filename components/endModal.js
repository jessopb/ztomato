

import React from 'react';

import Button from './button';
export default function EndModal(props){
    const { notes, done } = props;
    const [grade, setGrade] = React.useState('');
    const [endNotes, setEndNotes] = React.useState('');

    const handleDone = () => {
        // send
        done();
    }

    new Notification('Time')
return (
    <div className={"flex flex-col items-center p-5 rounded-lg bg-green-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
        <p>How did you do?</p>
        <div className={"flex"}>
        <Button type="primary" onClick={() => setGrade(1)} text='Ugh' />
            <Button type="primary" onClick={() => setGrade(2)} text='Ok' />
        <Button type="primary" onClick={() => setGrade(3)} text='Great' />
        </div>
        <p>What did yo udo?</p>
        <textarea rows="5" value={endNotes} onChange={e => setEndNotes(e.target.value)} />
        <Button type="primary" onClick={handleDone} text='Done' />
    </div>)
}