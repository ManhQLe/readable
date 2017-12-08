import {mergeWithNew} from './generic'
import {MERGE_POSTS} from '../actions'

export default function(posts,action){
    switch(action.type){
        case MERGE_POSTS:
            return mergeWithNew(posts,action.data,p=>p.id);
        default:
        return posts
    }
}