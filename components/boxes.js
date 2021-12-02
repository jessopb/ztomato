import React from "react";
import classnames from 'classnames';

export default function Box(props) {
    const { minutes } = props;

    const squares = [];
    for(let i = 0; i < 25; i++) {
        squares.push(
        <div key={`box${i}`} className={ i < minutes ? 'p-4 bg-green-900 border border-green-400' : 'p-4 bg-green-700 border border-green-400'}></div>
        )
    }
    return <div
        className={classnames('grid-container grid grid-cols-5')}>
            {squares.map(e => e)}
            
        </div>
}
