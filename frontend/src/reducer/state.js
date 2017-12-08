import AppSettings from '../AppSettings'
import ApiService from '../utils/ApiService'

const state = {
    categories:[], 
    posts:[],
    comments:[],
    apiService: new ApiService(AppSettings.getUrl(),AppSettings.TOKEN);
}


export default state;