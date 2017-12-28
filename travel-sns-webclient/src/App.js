import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// CommentBox 
class App extends Component {
  render() { 
    return ( 
      <div className="storyBox"> 
        <center>
          <h1>여행 기록</h1>
        </center>
        <StoryList {...this.props} /> 
      </div>  
    );  
  }  
}

class StoryList extends Component { 
  render() { 
    var storys = this.props.data.map(function(story, index){ 
      return <Story key={index}>{story}</Story>  
    }.bind(this));  
    return ( 
      <div className="storyList">  {storys} </div>
    );  
  }  
}

class Story extends Component{
  render() { 
    return ( 
      <div className="story"> 
        {this.props.children.isFirst == true ? '여행을 시작해 보세요' : this.renderStorys()}
      </div>  
    );
  }

  renderStorys(){
    return(
      <div>
        <h2>  
          {this.props.children.author} 
        </h2>
        {this.props.children.text} 
      </div>
    );
  }
}


export default App;
