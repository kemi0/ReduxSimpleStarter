
//State argument is not application state, only the state
// this rediucer is responsible for 
// never mutate the state 
// state.title = book.title 
// always want to return a fresh object 
// remember producers need to be connect into the combuned redicers
// statement in index.js
export default function( state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        
    }
    return state;

}