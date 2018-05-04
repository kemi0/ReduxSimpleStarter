// create a new component. this component should produce some html
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCcDAVsmjsSKyf65jePkCftULWyIgT0mzo';

// app is the parent to video list 
// video list needs to get access to app 
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: []
        };

        YTsearch({key: API_KEY, term: 'lebron james'}, (videos) => {
            this.setState({ videos });
            //this.setState( videos: videos )
            // when ever the key and value are the same 
            // syntacally suger 
    });
 }
    render() {
        return(
            <div>
                <SearchBar />
                <VideoDetail videos={this.state.videos[0]} />
                <VideoList videos={ this.state.videos } />
            </div>
            
        ) 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));