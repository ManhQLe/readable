import AppSettings from '../AppSettings'
import ApiService from '../utils/ApiService'

const state = {
    loginAccount:null,
    categories:[], 
    posts:[],
    comments:[],
    collapseStates:{},
    apiService: new ApiService(AppSettings.getUrl(),AppSettings.TOKEN)
}


export default state;