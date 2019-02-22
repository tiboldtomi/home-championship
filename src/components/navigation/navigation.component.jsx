import './navigation.style.scss';
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="container">
                <div className="container__title">{'HighLife FIFACrew Home Cup'}</div>
                <div className="container__github"><a target="_blank" rel="noopener noreferrer" href="https://github.com/tiboldtomi/home-championship">{'Github'}</a></div>
            </div>
        );
    }
}

export default Navigation;