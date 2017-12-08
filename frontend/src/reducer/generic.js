export function mergeWithNew(existingCol,newCol,idFx){
    const result = [];
    const ids={};
    newCol.forEach(e=> {
        result.push(e);
        ids[idFx(e)] = e;
    });

    existingCol.forEach(x=>!ids[idFx(x)]&&result.push(x));
    return result;
}