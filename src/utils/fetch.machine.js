
export const FETCH_TRANSITIONS = {
  SWITCH: 'switch',
  RESOLVE: 'resolve',
  REJECT: 'reject',
}

export const FETCH_STATES = {
  IDLE: 'idle',
  FETCH: 'fetch',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

const fetchMachine = {
  initialState: FETCH_STATES.IDLE,
  states: {
    idle: {
      transitions: {
        [FETCH_TRANSITIONS.SWITCH]: {
          target: FETCH_STATES.FETCH,
        },
      },
    },
    fetch: {
      transitions: {
        [FETCH_TRANSITIONS.RESOLVE]: {
          target: FETCH_STATES.SUCCESS,
        },
        [FETCH_TRANSITIONS.REJECT]: {
          target: FETCH_STATES.FAILURE,
        },
      },
    },
    success: {
      transitions: {
        [FETCH_TRANSITIONS.SWITCH]: {
          target: FETCH_STATES.FETCH
        }
      }
    },
    failure: {
      transitions: {
        [FETCH_TRANSITIONS.SWITCH]: {
          target: FETCH_STATES.FETCH
        }
      },
    },
  },
}

export default fetchMachine
