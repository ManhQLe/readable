export default class ApiService {

    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    getCategories() {
        const url = `${this.url}/categories`;
        return fetch(url, {
            headers: ApiService.getHeaders(token)
        }).then(r => {
            return r.json().categories;
        })
    }

    /*************POSTS**************/

    getPosts(cat) {
        cat = cat && cat.length ? ('/' + cat) : '';
        const url = `${this.url}${cat}/posts`;
        return fetch(url, {
            headers: ApiService.getHeaders(token)
        }).then(r => r.json().categories)
    }

    getPost(id) {
        const url = `${this.url}/posts/${id}`;
        let ajaxOptions = this.getOptions();

        return fetch(url, ajaxOptions).then(r => r.json())
    }

    votePost(id,isUp){        
        const url = `${this.url}/posts/${id}`;
        const option = isUp?"upVote":"downVote" 

        let ajaxOptions = this.getOptions({option});        
        ajaxOptions.body = JSON.stringify({o});
        ajaxOptions.method = 'POST'
        ajaxOptions.headers["Content-Type"] = "application/json"

        return fetch(url, ajaxOptions).then(r => r.json())
    }

    delPost(id) {
        const url = `${this.url}/posts/${id}`;
        let ajaxOptions = this.getOptions();
        return fetch(url, {
            headers: ApiService.getHeaders(token)
        }).then(r => r.json())
    }


    /********************************/

    
    getOptions(){
        return {
            headers:getHeaders()
        }
    }

    getHeaders() {
        return {
            Authorization: this.token
        }
    }
}