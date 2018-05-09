import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';
// bindactioncreators not bindactionscreators spelling is important 

// the component has graduated to our state container 
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick ={()=> this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            )
        });
    };
    
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // will show up as props inside booklist 
    // this.props
    return{
        books: state.books
    }
            
}; 
//Anything returnd from this function will end up as props
// on the BoookList container
function mapDispatchToProps(dispatch){
    // whenever select book is called, the resuilt should be passed
    // to all of our reducers
    // the dispatch sets all the actions to the reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
//promote BooList from a componenet to a container - it nees to know 
//  about this new dispath method, selectBook. Make it availble 
//  as a prop
// a function call that returns a function   
export default connect(mapStateToProps, mapDispatchToProps)(BookList);