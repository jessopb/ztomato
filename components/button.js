import React from "react";
import classnames from 'classnames';

export default function Button(props) {
    const { text, button, onClick, type } = props;
    // if (type === 'primary')
    if (button === 'text') {
        return <button
            className={classnames('hover:text-green-700 py-2 text-green-900 m-2',
                {
                    'hover:bg-green-700': button === 'primary',
                }
            )}
            type='button'
            onClick={onClick}>{text}</button>
    }
    return <button
        className={classnames('rounded-lg px-4 py-2 text-green-400 m-2 bg-green-900',
            {
                'bg-greeb-900': button === 'primary',
                'hover:bg-green-600': button === 'primary',
            }
        )}
        type={type || 'button'}
        onClick={onClick}>{text}</button>
}
