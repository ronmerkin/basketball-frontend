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
