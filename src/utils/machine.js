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
      transitions: {
        switch: {
          target: 'fetch'
        }
      }
    },
    failure: {
      transitions: {
        switch: {
          target: 'fetch'
        }
      },
    },
  },
}
export default stateMachine
