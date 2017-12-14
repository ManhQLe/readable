import {mergeWithNew} from './generic'
import {MERGE_POSTS,MERGE_ALL} from '../actions'

export default function(posts,action){
    switch(action.type){
        case MERGE_POSTS:
            return mergeWithNew(posts,action.data.posts,p=>p.id);
        case MERGE_ALL:
            return mergeWithNew(posts,action.data.posts||[],p=>p.path);
        default:
        return posts
    }
}