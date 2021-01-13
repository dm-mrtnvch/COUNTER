import React from 'react';

export type ButtonsType = {
    increase: () => void
    reset: () => void
    maxValue: number
    count: number
}

let CounterButtons = (props: ButtonsType) => {
    return (
        <div>
            <input disabled={props.count === props.maxValue}
                   onClick={props.increase}
                   value='INCREASE'
                   type="button"
            />

            <input
                disabled={props.count === 0}
                onClick={props.reset}
                value='RESET'
                type="button"
            />
        </div>
    )
}

export default CounterButtons;