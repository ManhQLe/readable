import {mergeWithNew} from './generic'
import {MERGE_COMMENTS,MERGE_ALL} from '../actions'

export default function(comments,action){
    switch (action.type){
        case MERGE_COMMENTS:
            return mergeWithNew(comments,action.data.comments,c=>c.id);
        case MERGE_ALL:
            return mergeWithNew(comments,action.data.comments||[],c=>c.id);
        default:
            return comments;
    }    
}