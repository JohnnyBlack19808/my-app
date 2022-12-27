import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let PostsData = [
  {like: 18, message: 'Today I\'m feeling good! I\'m walking on New-York streets!'},
  {like: 14, message: 'How are you my suscribers?'},
]
let DialogItemData = [
  {id: '1', name: 'Dash'},
  {id: '2', name: 'Nika'},
  {id: '3', name: 'Danelia'},
  {id: '4', name: 'John'},
  {id: '5', name: 'Lola'},
  {id: '6', name: 'Den'},
  {id: '7', name: 'Mary'},
  {id: '8', name: 'Lusi'}
]

let MessagesData = [
  {id: '1', text: 'Hi!'},
  {id: '2', text: 'How are you?'},
  {id: '3', text: 'Hi!'},
  {id: '4', text: 'How are you?'},
  {id: '5', text: 'Hi!'},
  {id: '6', text: 'How are you?'},
  {id: '7', text: 'Hi!'},
  {id: '8', text: 'How are you?'},
  {id: '9', text: 'Hi!'},
  {id: '10', text: 'How are you?'},
  {id: '11', text: 'I\'m good!'}
  
]
root.render(
  
  <React.StrictMode>
    <App PostsData={PostsData} DialogItemData={DialogItemData} MessagesData={MessagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
