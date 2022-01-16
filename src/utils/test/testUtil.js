import React from 'react'
import { firstTeamData } from './machineUtil'
import { render } from "@testing-library/react";
const nock = require('nock')

export function selectUtil ({ options, value, onChange }) {
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
    const defaultReplyHeaders = { 'access-control-allow-origin': '*' }
    const basePath = 'http://localhost:8000'
    if (resolveError) {
        nock(basePath)
          .defaultReplyHeaders(defaultReplyHeaders)
          .get('/teams?team=FAKE')
          .reply(404, 'No team Found')
    } else {
        nock(basePath)
          .defaultReplyHeaders(defaultReplyHeaders)
          .get('/teams?team=Warriors')
          .reply(200, [firstTeamData])
    }
    render(Component)
}