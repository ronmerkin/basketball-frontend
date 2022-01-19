import React from 'react'
import { act, fireEvent, screen } from '@testing-library/react'
import Team from '../Team'
import { setup } from '../../../utils/test/testUtil'

const SELECT_TEST_ID = 'select'
const SPINNER_CLASS = '.spinner'

// mocking react select for testing purposes
jest.mock('react-select', () => ({ options, value, onChange }) => {
    const { selectUtil } = require('../../../utils/test/testUtil')
    return selectUtil({ options, value, onChange })
})

function selectTeam (value) {
    fireEvent.change(screen.getByTestId(SELECT_TEST_ID), {
        target: { value }
    })
}

async function setupAndTeamSelection (team, resolveError) {
    setup(<Team />, team, resolveError)
    await selectTeam(team)
}

describe('Team', () => {
    it('Should find spinner and render selected team', async () => {
        // arrange
        const team = 'Warriors'
        const fullTeamName = /Golden State Warriors/
        const teamPlayer = 'Nicolas Batum'
    
        // act
        await act(async () => {
            await setupAndTeamSelection(team)
        })
        // assert
        // verify spinner exists
        expect(getComputedStyle(document.querySelector(SPINNER_CLASS))).not.toBeNull()
        expect(await screen.findByText(fullTeamName)).toBeInTheDocument()
        expect(await screen.findByText(teamPlayer)).toBeInTheDocument()
    })
    it('Choose a non existing team', async () => {
        // arrange
        const team = 'FAKE'
        const errorMessage = /No team Found/
        // act
        await act(async () => {
            await setupAndTeamSelection(team, true)
        })
        // assert
        expect(await screen.findByText(errorMessage)).toBeInTheDocument()
    })
})