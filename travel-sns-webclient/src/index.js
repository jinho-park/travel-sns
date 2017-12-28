import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

{
    var data = [  
        {author : "null", text : "null", isFirst : true},  
        {author : "작성자1", text : "글1", isFirst : false},  
        {author : "작성자2", text : "글2", isFirst : false},  
        {author : "작성자3", text : "글3", isFirst : false},  
        {author : "작성자4", text : "글4", isFirst : false} 
    ];
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
