import actions from '../actions'

export default function(categories,action){
    switch(action.type)
    {
        case actions.GET_CATEGORIES:
            return action.data;
        default:
            return categories;
    }
    
}

