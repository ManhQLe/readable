import AppSettings from '../AppSettings'
import ApiService from '../utils/ApiService'

const state = {
    loginAccount:null,
    categories:[], 
    posts:[],
    comments:[],
    apiService: new ApiService(AppSettings.getUrl(),AppSettings.TOKEN)
}


export default state;