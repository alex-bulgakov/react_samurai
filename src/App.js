import React from 'react';
import './App.css';
import './lib/fontawesome/css/fa_all.min.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"> <Dialogs dialogs={props.data.dialogs} messages={props.data.messages}/>
                    </Route>
                    <Route path="/profile"> <Profile posts={props.data.posts}/> </Route>
                    <Route path="/news"> <News/> </Route>
                    <Route path="/music"> <Music/> </Route>
                    <Route path="/settings"> <Settings/> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;