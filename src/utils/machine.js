const stateMachine = {
  initialState: 'idle',
  states: {
    idle: {
      transitions: {
        switch: {
          target: 'fetch',
        },
      },
    },
    fetch: {
      transitions: {
        resolve: {
          target: 'success',
        },
        reject: {
          target: 'failure',
        },
      },
    },
    success: {
      type: 'final',
    },
    failure: {
      type: 'final',
    },
  },
}
export default stateMachine
