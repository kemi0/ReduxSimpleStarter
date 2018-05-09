
export function selectBook(book){
    // selectBook is an Action Creator, it needs to return an action,
    // an object with a type property
    // the action creator contains the object that now can be passed
    // to all of the reducers 
    console.log("A book has been selectd:", book.title)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
