import {MERGE_DATA} from '../actions'

export default function(collapseStates,action){
    switch(action.type)
    {        
        case MERGE_DATA:
            const newState = Object.assign({},collapseStates);
            return  Object.assign(newState,action.data.collapseStates||{});
        default:
            return collapseStates;
    }
    
}