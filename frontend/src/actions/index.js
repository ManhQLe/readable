export const MERGE_DATA = 'MERGE_DATA'

export function mergeAll(data,add){
    return {
        type:MERGE_DATA,
        data,
        add
    }
}

export function mergeCategories(categories,add){
    return mergeAll({categories},add);
}

export function setCollapseState(category,state){
    const collapseStates = {[category]:state}
    return mergeAll({collapseStates});
}

export function mergePosts(posts,add){
    return mergeAll({posts},add);
}

export function mergeComments(comments,add){
    return mergeAll({comments},add)
}


