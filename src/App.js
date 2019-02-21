import './App.style.scss';
import React, { Component } from 'react';
import Teams from './components/teams/teams.component';
import Navigation from './components/navigation/navigation.component';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="main-container">
                    <Teams />
                </div>
            </div>
        );
    }
}

export default App;
