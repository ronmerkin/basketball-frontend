import React from 'react'
const FINAL_DEFINITION = 'final'

function Machine(machineProps) {
    // TODO: error handling + adapt tests
    const machine = {
        value: machineProps.initialState,
        transition: (currState, event) => {
            if (!machineProps.states || !currState) {
                return
            }
            const currentDefinition = machineProps.states[currState]
            const currentDefinitionType = currentDefinition && currentDefinition.type
            if (currentDefinitionType && currentDefinitionType === FINAL_DEFINITION) {
                return
            }
            const destinationTransition = currentDefinition.transitions && currentDefinition.transitions[event]
            if (!destinationTransition) {
                return
            }
            machine.value = destinationTransition.target
            return machine.value
        }
    }
    return machine
}

export default Machine

/* One state is defined as the initial state. When a machine starts to execute, it automatically enters this state.
     Each state can define actions that occur when a machine enters or exits that state. Actions will typically have side effects.
     Each state can define events that trigger a transition.
     A transition defines how a machine would react to the event, by exiting one state and entering another state.
     A transition can define actions that occur when the transition happens. Actions will typically have side effects.
*/
