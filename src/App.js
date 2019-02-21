import './App.style.scss';
import React, { Component } from 'react';
import Teams from './components/teams/teams.component';
import Navigation from './components/navigation/navigation.component';
import Tabella from './components/tabella/tabella.component';
import Matches from './components/matches/matches.component';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="teams-container"><Teams /></div>
                <div className="tabella-container"><Tabella /></div>
                <div className="matches-container"><Matches /></div>
            </div>
        );
    }
}

export default App;
