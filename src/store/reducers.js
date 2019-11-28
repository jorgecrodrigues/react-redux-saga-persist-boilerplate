const AUTH_INITIAL_STATE = {
    currentUser: null,
    isLoggingIn: false,
};

const DEFAULT_INITIAL_STATE = {
    todos: []
};

export function authReducer(state = AUTH_INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTH':
            return {};
        default:
            return state;
    }
}

export function defaultReducer(state = DEFAULT_INITIAL_STATE, action) {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos, {
                        id: Math.random(),
                        text: action.payload.text
                    }
                ]
            };
        default:
            return state;
    }
}