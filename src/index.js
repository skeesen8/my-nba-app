import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import PlayersContainer from './components/PlayersContainer';
import DefaultPage from './components/DefaultPage';
import Form from './components/Form';
import SearchBar from './components/SearchBar';

// import reportWebVitals from './reportWebVitals';

const routes = [{
    path:"/",
    element:<App/>,
    children:[
        {index:true, element:<DefaultPage/>},
        {
        path:"/players",
        element:<PlayersContainer/>,
        },
        {
        path:"/players/new",
        element:<Form/>
        }

]
}
]

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />

);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
