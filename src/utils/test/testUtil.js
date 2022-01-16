import React from 'react'
import { render } from "@testing-library/react";
const nock = require('nock')

const firstTeamData = {
    full_name: 'Golden State Warriors',
    logo: 'https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif',
    name: 'Warriors',
    players: [
        {
            name: 'Nicolas Batum',
            age:29,
            position: 'PG',
            profile: 'https://randomuser.me/api/portraits/med/men/1.jpg'
        },
        {
            name: 'Kent Bazemore',
            age:27,
            position: 'SG',
            profile: 'https://randomuser.me/api/portraits/med/men/2.jpg'
        },
        {
            name: 'Darius Bazley',
            age:27,
            position: 'SF',
            profile: 'https://randomuser.me/api/portraits/med/men/3.jpg'
        },
        {
            name: 'Bradley Beal',
            age:30,
            position: 'PF',
            profile: 'https://randomuser.me/api/portraits/med/men/4.jpg'
        },
        {
            name: 'Malik Beasley',
            age:32,
            position: 'C',
            profile: 'https://randomuser.me/api/portraits/med/men/5.jpg'
        }
    ]
}

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