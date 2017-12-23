export const MERGE_DATA = 'MERGE_DATA'

export function mergeAll(data){
    return {
        type:MERGE_DATA,
        data
    }
}

export function mergeCategories(categories){
    return mergeAll({data:{categories}});
}


export function mergePosts(posts){
    return mergeAll({data:{posts}});
}

export function mergeComments(comments){
    return mergeAll({data:{comments}})
}


