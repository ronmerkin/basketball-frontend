import React from 'react'
import apiCall, { getTeamData } from '../apiUtil'
import { fireEvent, render, screen } from "@testing-library/react";

export function selectUtil ({ options, value, onChange, id }) {
    function handleChange(event) {
        const option = options.find(
            (option) => option.value === event.currentTarget.value
        )
        onChange(option)
    }
    return (
        <select data-testid='select' value={value} onChange={handleChange}>
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}

export function setup (Component, resolveError) {
    if (resolveError) {
        apiCall.mockRejectedValueOnce('No team Found')
    } else {
        apiCall.mockResolvedValue([getTeamData])
    }
    render(Component)
}

export function selectTeam (value) {
    fireEvent.change(screen.getByTestId('select'), {
        target: { value }
    })
}