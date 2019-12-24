import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    { id: 1, message: 'Hi!', likeCount: '2' },
    { id: 2, message: 'hallo!!', likeCount: '20' },
    { id: 3, message: 'Hi hi!', likeCount: '15' }
  ];

  
let dialogs = [
    { name: 'Max', id: 1 },
    { name: 'Misha', id: 2 },
    { name: 'Lena', id: 3 },
    { name: 'Dana', id: 4 }
  ];
  
  let messages = [
    { message: 'hi!' },
    { message: 'Privet!' },
    { message: 'gutten tag!!' }
  ];
  

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
