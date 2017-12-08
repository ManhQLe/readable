import {MERGE_CATEGORIES} from '../actions'
import {mergeWithNew} from './generic'
export default function(categories,action){
    switch(action.type)
    {
        case MERGE_CATEGORIES:                    
            return mergeWithNew(categories,action.data,c=>c.path);
        default:
            return categories;
    }
    
}

