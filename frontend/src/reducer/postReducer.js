import {mergeWithNew} from './generic'
import {MERGE_DATA} from '../actions'

export default function(posts,action){
    switch(action.type){
        case MERGE_DATA:
            return mergeWithNew(posts,action.data.posts||[],p=>p.id,action.add);
        default:
        return posts
    }
}