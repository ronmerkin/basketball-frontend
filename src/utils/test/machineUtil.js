export const firstTeamData = {
    full_name: 'Golden State Warriors',
    logo: 'https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif',
    name: 'Warriors',
    players: [
        {
            name: 'Nicolas Batum',
            age:29,
            position: 'PG'
        },
        {
            name: 'Kent Bazemore',
            age:27,
            position: 'SG'
        },
        {
            name: 'Darius Bazley',
            age:27,
            position: 'SF'
        },
        {
            name: 'Bradley Beal',
            age:30,
            position: 'PF'
        },
        {
            name: 'Malik Beasley',
            age:32,
            position: 'C'
        }
    ]
}
export const defaultState = {
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
                switch: {
                    target: 'on'
                }
            },
        },
    }
}
