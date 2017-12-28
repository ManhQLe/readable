import {mergeWithNew} from './generic'
import {MERGE_DATA} from '../actions'

export default function(comments,action){
    switch (action.type){
        case MERGE_DATA:
        if(action.data.comments)
            return mergeWithNew(comments,action.data.comments||[],c=>c.id);
        default:
            return comments;
    }    
}