//Importing from a Packaage we install with NPM (dont need to write the path)
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
//Importing from Local Components(we need to write the path to the file):
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAwC_smFJROD4zdYSVCQoyjxSWj7csEGoM';
// Create a new Componets. this will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, 
            (videos) => {
                this.setState({
                    videos:videos,
                    selectedVideo: videos[0]
                
                });
               
            });
    }
    render() {

        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        );
    }
}
// Take this component generated HTML put it in the DOM
ReactDOM.render(
    <App/>, document.querySelector('.container'));
