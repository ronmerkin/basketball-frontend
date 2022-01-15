import React from 'react'
import {render, fireEvent, screen, getAllByRole, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lineups from '../lineups'
import apiCall, {getTeamData} from '../../utils/apiUtil'
import { setup, selectTeam } from '../../utils/test/testUtil'

jest.mock('../../utils/apiUtil')
jest.mock('react-select', () => ({ options, value, onChange }) => {
    const { selectUtil } = require('../../utils/test/testUtil')
    return selectUtil({ options, value, onChange })
})

describe('Lineups', () => {
    it('Should display two selects', () => {
        // arrange
        setup(<Lineups />)
        // assert
        expect(screen.getAllByTestId('select-1')).toHaveLength(2)
        fireEvent.change(screen.getByTestId('select-1'), {
            target: { value: 'Warriors' }
        })
        // TODO: better verify spinner exists
        // const response = getComputedStyle(document.querySelectorAll('.spinner'))
        // con
    })
})