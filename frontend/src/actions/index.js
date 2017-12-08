export const MERGE_CATEGORIES = 'MERGE_CATEGORIES'
export const MERGE_POSTS = 'MERGE_POSTS'
export const MERGE_COMMENTS= 'MERGE_COMMENTS'

export function mergeCategories(data){
    return {
        type:MERGE_CATEGORIES,
        data
    }
}

export function mergePosts(data){
    return {
        type:MERGE_POSTS,
        data
    }
}

export function mergeComments(data){
    return{
        type:MERGE_COMMENTS,
        data
    }
}
