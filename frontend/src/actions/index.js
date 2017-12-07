export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST_BY_CAT = 'GET_POST_BY_CAT'

export function getCategories(){
    return {
        type:GET_CATEGORIES
    }
}

export function getPosts(){
    return {
        type:GET_POSTS        
    }
}

export function getPostsByCatgory(category){
    return {
        type:GET_POST_BY_CAT,
        category
    }
}


