export const getTeamData = {
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
export const getSecondTeamData = {
    full_name: 'Phoenix Suns',
    logo: 'https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif',
    name: 'Suns',
    players:[
        {
            name: 'Nic Claxton',
            age: 29,
            position: 'PG'
        },
        {
            name: 'Amir Coffey',
            age: 27,
            position: 'SG'
        },
        {
            name: 'John Collins',
            age: 27,
            position: 'SF'
        },
        {
            name: 'Zach Collins',
            age: 30,
            position: 'PF'
        },
        {
            name: 'Darren Collison',
            age: 32,
            position: 'C'
        }
    ]
}

// TODO: maybe replace with msw package
const apiCall = jest.fn()

export default apiCall