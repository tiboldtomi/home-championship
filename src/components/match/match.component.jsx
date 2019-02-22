import './match.style.scss';
import React, { Component } from 'react';

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { match } = this.props;
        return (
            <div className="matches-match">
                <div className="matches-team--left">
                    <img className="team-logo" src={match.team1.logo} alt="" />
                    <div style={{ margin: '0 20px' }}>{match.team1.name}</div>
                    <input className="input" type="text" />
                </div>
                <div className="matches-separator">{' - '}</div>
                <div className="matches-team--right">
                    <input className="input" type="text" />
                    <div style={{ margin: '0 20px' }}>{match.team2.name}</div>
                    <img className="team-logo" src={match.team2.logo} alt="" />
                </div>
            </div>
        );
    }
}

export default Match;