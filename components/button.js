import React from "react";
import classnames from 'classnames';

export default function Button(props) {
    const { text, type, onClick } = props;
    // if (type === 'primary')
    if (type === 'text') {
        return <button
            className={classnames('hover:text-green-700 py-2 text-green-900 m-2',
                {
                    'hover:bg-green-700': type === 'primary',
                }
            )}
            onClick={onClick}>{text}</button>
    }
    return <button
        className={classnames('rounded-lg px-4 py-2 text-green-400 m-2 bg-green-900',
            {
                'bg-greeb-900': type === 'primary',
                'hover:bg-green-600': type === 'primary',
            }
        )}
        onClick={onClick}>{text}</button>
}
