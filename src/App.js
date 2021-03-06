import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path='/messages' render={() => <Messages />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>

  );
};

export default App;