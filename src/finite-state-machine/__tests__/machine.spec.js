import machine from '../machine'
import { defaultState } from './utils/consts'

describe('Machine Gererator', () => {
    it('Should properly generate machine', () => {
        // arrange
        const newMachine = machine(defaultState)
        // act
        const newMachineValue = newMachine.transition(newMachine.value, 'switch')
        // assert
        expect(newMachine.value).toBe('on')
        expect(newMachineValue).toBe('on')
    })
    it('Should return undefined for non existing event', () => {
        // arrange
        const newMachine = machine(defaultState)
        // act
        const newMachineValue = newMachine.transition(newMachine.value, 'swap')
        // assert
        expect(newMachine.value).toBe('off')
        expect(newMachineValue).toBeUndefined()
    })
    it('Should return undefined for a machine with no states property', () => {
        // arrange
        const newMachine = machine({ initialState: defaultState.initialState })
        // act
        const newMachineValue = newMachine.transition(newMachine.value, 'switch')
        // assert
        expect(newMachineValue).toBeUndefined()
    })
    it('Should return undefined for a state with no transitions property', () => {
        const newMachine = machine({
            initialState: 'off',
            states: {
                on: {
                    type: 'final'
                },
                off: {}
            }
        })
        const newMachineValue = newMachine.transition(newMachine.value, 'switch')
        expect(newMachineValue).toBeUndefined()
    })
    it('Should return undefined for final type', () => {
        // arrange
        const newMachine = machine({
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
        const newMachineFirstTransition = newMachine.transition(newMachine.value, 'switch')
        const newMachineSecondTransition = newMachine.transition(newMachineFirstTransition, 'switch')
        // assert
        expect(newMachineFirstTransition).toBe('on')
        expect(newMachineSecondTransition).toBeUndefined()
    })
})
