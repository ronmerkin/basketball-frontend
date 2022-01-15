import useMachine from '../../useMachine'
import Machine from '../../machine'
import React, { useEffect } from 'react'
import { defaultState } from './consts'

export default function TestComponent ({ shouldtransit, transitionEvent, state = defaultState }) {
    const [value, transition] = useMachine(Machine(state))
    useEffect(() => {
        if (shouldtransit) {
            transition(transitionEvent)
        }
    }, [])
    const handleClick = () => {
        transition(transitionEvent)
    }
    return (
        <div>
            <div>{value}</div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}