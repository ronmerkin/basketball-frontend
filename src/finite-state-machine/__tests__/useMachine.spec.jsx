import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import TestComponent from '../../utils/test/testComponent'

describe('Use Machine Hook', () => {
    it('Should be able to receive existing state value', async () => {
        // arrange + act
        render(<TestComponent />)
        // assert
        expect(screen.getByText('off')).toBeInTheDocument()
    })
    it('Should be able to set a new state value', async () => {
        // arrange + act
        render(<TestComponent shouldtransit transitionEvent='switch'/>)
        // assert
        expect(await screen.findByText('on')).toBeInTheDocument()
    })
    it('Should retreive undefined value for final state', async () => {
        // arrange
        const currState = {
            initialState: 'on',
            states: {
                on:  {
                    type: 'final'
                },
                off: {
                    transitions: {
                        switch: {
                            target: 'on'
                        }
                    },
                },
            }
        }
        // act
        render(<TestComponent shouldtransit transitionEvent='switch' state={currState}/>)
        // assert
        expect(await screen.findByText('on')).toBeInTheDocument()
    })
    it('Should retreive off state after a double switch', async () => {
        // arrange
        render(<TestComponent shouldtransit transitionEvent='switch' />)
        // expect(await screen.findByText('on')).toBeInTheDocument()
        //act
        fireEvent.click(screen.getByText('Click me'))
        // assert
        expect(await screen.findByText('off')).toBeInTheDocument()
    })
})
