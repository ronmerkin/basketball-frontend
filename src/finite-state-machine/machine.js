import React from 'react'
const FINAL_DEFINITION = 'final'

function Machine(machineProps) {
    const machine = {
        initialValue: machineProps.initialState,
        transition: (currState, event) => {
            if (!machineProps.states || !currState) {
                return machine.initialValue
            }
            const currentDefinition = machineProps.states[currState]
            const currentDefinitionType = currentDefinition && currentDefinition.type
            if (currentDefinitionType && currentDefinitionType === FINAL_DEFINITION) {
                return currState
            }
            const destinationTransition = currentDefinition.transitions && currentDefinition.transitions[event]
            if (!destinationTransition) {
                return currState
            }
            if (destinationTransition.target) {
                machine.initialValue = destinationTransition.target
            }
            return machine.initialValue
        }
    }
    return machine
}

export default Machine
