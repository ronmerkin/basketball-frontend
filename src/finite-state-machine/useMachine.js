import { useState, useCallback } from 'react'

function useMachine(machine) {
    const [value, setValue] = useState(machine.initialValue)
    const transition = useCallback((event) => {
        const newValue = machine.transition(value, event)
        setValue(newValue)
    }, [value])
    return [value, transition]
}

export default useMachine
