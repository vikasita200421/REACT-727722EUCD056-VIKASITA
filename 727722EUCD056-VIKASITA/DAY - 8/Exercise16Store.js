import { createStore } from 'redux';

// Reducer
const rootReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// Store
const store = createStore(rootReducer);

export default store;
