import initialState from './state'
import categoryReducer from './categoryReducer'
import postReducer from './postReducer'
import commentReducer from './commentReducer'


function reducerCreator(reducerObj) {
    return (state = initialState, action) => {
        let newState = Object.assign({}, state);
        const keys = Object.keys(reducerObj);

        for (const key of keys) {
            newState[key] = reducerObj[key](state[key], action)
        }
        return newState;
    }
}

export default reducerCreator({
    "categories":categoryReducer,
    "posts":postReducer,
    "comments":commentReducer
})