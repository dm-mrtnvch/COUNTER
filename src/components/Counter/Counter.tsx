import React from "react"
import CounterDisplay from '../CounterDisplay/CounterDisplay';
import CounterButtons from '../CounterButtons/CounterButtons';

type CounterType = {
    increase: () => void
    count: number
    reset: () => void
    maxValue: number
}

export let Counter = (props: CounterType) => {
    return (
        <div>
            <CounterDisplay count={props.count}/>

            <CounterButtons increase={props.increase}
                            reset={props.reset}
                            maxValue={props.maxValue}
                            count={props.count}
            />
        </div>
    )
}

export default Counter;