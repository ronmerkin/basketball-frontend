export const firstTeamData = {
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
