import {MERGE_CATEGORIES,MERGE_ALL} from '../actions'
import {mergeWithNew} from './generic'
export default function(categories,action){
    switch(action.type)
    {        
        case MERGE_CATEGORIES:                    
            return mergeWithNew(categories,action.data.categories,c=>c.path);
        case MERGE_ALL:
            return mergeWithNew(categories,action.data.categories||[],c=>c.path);
        default:
            return categories;
    }
    
}

