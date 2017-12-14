export function mergeWithNew(existingCol, newCol, idFx, add = true) {
    const result = [];
    const ids = {};
    newCol.forEach(e => {
        add && result.push(e);
        ids[idFx(e)] = e;
    });

    existingCol.forEach(x =>{        
        !ids[idFx(x)] && result.push(x)        
    });
    return result;
}