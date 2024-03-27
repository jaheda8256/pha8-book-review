const getStoredRead =()=>{
    const storedRead = localStorage.getItem('read-book');
    if(storedRead){
        return JSON.parse(storedRead);
    }
    return [];
}

const saveList = id =>{
       const storedReads = getStoredRead();
       const exits = storedReads.find(readId => readId === id );
       if(!exits){
        storedReads.push(id);
        localStorage.setItem('read-book',JSON.stringify(storedReads) );
       }
}





const getStoredWishList =()=>{
    const storedRead = localStorage.getItem('wish-list');
    if(storedRead){
        return JSON.parse(storedRead);
    }
    return [];
}

const saveListWish = id =>{
       const storedReads = getStoredWishList();
       const exits = storedReads.find(readId => readId === id );
       if(!exits){
        storedReads.push(id);
        localStorage.setItem('wish-list',JSON.stringify(storedReads) );
       }
}

export {saveList, getStoredRead}
export {saveListWish, getStoredWishList}