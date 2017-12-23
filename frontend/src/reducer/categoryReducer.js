import {MERGE_DATA} from '../actions'
import {mergeWithNew} from './generic'
export default function(categories,action){
    switch(action.type)
    {        
        case MERGE_DATA:
            return mergeWithNew(categories,action.data.categories||[],c=>c.path);
        default:
            return categories;
    }
    
}

