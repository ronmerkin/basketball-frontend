import Machine from '../machine'
import { defaultState } from '../../utils/test/machineUtil'
const ON = 'on'
const OFF = 'off'

describe('Machine Gererator', () => {
    it('Should properly generate machine', () => {
        // arrange
        const newMachine = Machine(defaultState)
        // act
        const newMachineValue = newMachine.transition(newMachine.initialValue, 'switch')
        // assert
        expect(newMachine.initialValue).toBe(ON)
        expect(newMachineValue).toBe(ON)
    })
    it('Should return same state for non existing event', () => {
        // arrange
        const newMachine = Machine(defaultState)
        // act
        const newMachineValue = newMachine.transition(newMachine.initialValue, 'swap')
        // assert
        expect(newMachine.initialValue).toBe(OFF)
        expect(newMachineValue).toBe(OFF)
    })
    it('Should return current value for a machine with no states property', () => {
        // arrange
        const newMachine = Machine({ initialState: defaultState.initialState })
        // act
        const newMachineValue = newMachine.transition(newMachine.initialValue, 'switch')
        // assert
        expect(newMachineValue).toBe(defaultState.initialState)
    })
    it('Should return current state for a state with no transitions property', () => {
        const newMachine = Machine({
            initialState: 'off',
            states: {
                on: {
                    type: 'final'
                },
                off: {}
            }
        })
        const newMachineValue = newMachine.transition(newMachine.initialValue, 'switch')
        expect(newMachineValue).toBe(OFF)
    })
    it('Should return the same final state for final type', () => {
        // arrange
        const newMachine = Machine({
            initialState: 'off',
            states: {
                on: {
                    type: 'final'
                },
                off: {
                    transitions: {
                        switch: {
                            target: 'on'
                        }
                    }
                }
            }
        })
        // act
        const newMachineFirstTransition = newMachine.transition(newMachine.initialValue, 'switch')
        const newMachineSecondTransition = newMachine.transition(newMachine.initialValue, 'switch')
        // assert
        expect(newMachineFirstTransition).toBe(ON)
        expect(newMachineSecondTransition).toBe(ON)
    })
    it('Should return the machine current state if no target on state', () => {
        const newMachine = Machine({
            initialState: 'off',
              states: {
                on: {
                    transitions: {
                        switch: {
                            target: 'off'
                        },
                    },
                },
                off: {
                    transitions: {
                        switch: {}
                    },
                },
            }
        })
        // act
        const newMachineTransition = newMachine.transition(newMachine.initialValue, 'switch')
        expect(newMachineTransition).toBe(OFF)
    })
})
