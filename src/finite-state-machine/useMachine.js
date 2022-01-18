import { useState } from 'react'

function useMachine(machine) {
    const [value, setValue] = useState(machine.initialValue)
    function transition (event) {
        const newValue = machine.transition(value, event)
        setValue(newValue)
    }
    return [value, transition]
}

export default useMachine
