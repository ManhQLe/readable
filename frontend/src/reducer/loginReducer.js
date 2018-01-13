import {MERGE_DATA} from '../actions'

export default function(loginAccount,action){
    switch (action.type){
        case MERGE_DATA:
            return action.data.loginAccount || loginAccount    
        default:
            return loginAccount
    }
}
