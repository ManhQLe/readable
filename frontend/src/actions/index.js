export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const UPDATE_COMMENTS= 'UPDATE_COMMENTS'

export function updateCategories(data){
    return {
        type:UPDATE_CATEGORIES,
        data
    }
}

export function updatePosts(data){
    return {
        type:UPDATE_POSTS,
        data
    }
}

export function updateComments(data){
    return{
        type:UPDATE_COMMENTS,
        data
    }
}
