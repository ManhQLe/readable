import {mergeWithNew} from './generic'
import {MERGE_COMMENTS} from '../actions'

export default function(comments,action){
    switch (action.type){
        case MERGE_COMMENTS:
            return mergeWithNew(comments,action.data,c=>c.id);
        default:
            return comments;
    }    
}