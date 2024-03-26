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
export {saveList, getStoredRead}