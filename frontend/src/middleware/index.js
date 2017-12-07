import actions from '../actions'
import ApiService from '../utils/ApiService'
import AppSettings from '../AppSettings'

const service = new ApiService(AppSettings.getUrl(),AppSettings.TOKEN);


export default serviceApi = store=>next=>action=>{
    switch(action.type){
        case actions.GET_CATEGORIES:
            service.getCategories()
            .then(cs=>{
                action.data = cs;
                next(action);
            })
        case actions.GET_POSTS:
        case actions.GET_POST_BY_CAT:
            service.getPosts(action.category)
            .then(ps=>{
                action.data = ps;
                next(action);
            })
            break;

        default:
            next(action)
    }
}