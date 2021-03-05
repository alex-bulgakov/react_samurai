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
// import Router from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class="app-wrapper-content">
                    <Route path="/dialogs" reneder={() => <Dialogs/>}/>
                    <Route path="/profile" reneder={() => <Profile/>}/>
                    <Route path="/news" reneder={() => <News/>}/>
                    <Route path="/music" reneder={() => <Music/>}/>
                    <Route path="/settings" reneder={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;