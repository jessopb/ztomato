import React from 'react';
import Button from './button';

export default function EndModal(props){
    const { notes, done } = props;
    const [grade, setGrade] = React.useState('');
    const [endNotes, setEndNotes] = React.useState('');

    const handleDone = () => {
        done();
    }

    React.useEffect(() => {
        console.log('runeffect')
        new Notification('Time')
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const req = await fetch('api/tomato', {
                method: 'POST',
                body: JSON.stringify({
                    notes,
                    grade,
                    endNotes,
                })
            })

            const res = await req.json();
            handleDone();
        } catch (e) {
        }
    }

    return (
        <div className={"flex flex-col items-center p-5 rounded-lg bg-green-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
            <form onSubmit={handleSubmit}>
                <p>How did you do?</p>
                <div className={"flex"}>
                    <Button type="button" name='ugh' onClick={() => setGrade(1)} text='Ugh' />
                    <Button type="button" name='ok' onClick={() => setGrade(2)} text='Ok' />
                    <Button type="button" name='great' onClick={() => setGrade(3)} text='Great' />
                </div>
                <p>What did yo udo?</p>
                <textarea rows="5" value={endNotes} onChange={e => setEndNotes(e.target.value)} />
                <Button type="submit" onSubmit={handleSubmit} text='Done' />
            </form>
        </div>
    )
}