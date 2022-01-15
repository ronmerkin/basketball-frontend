import { useState, useCallback } from 'react'

function useMachine(machine) {
    const [value, updateStateValue] = useState(machine.value)
    const transition = useCallback((event) => {
        const newValue = machine.transition(value, event)
        updateStateValue(newValue)
    }, [value])

    return [value, transition]
}

export default useMachine
