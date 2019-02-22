import './match.style.scss';
import React, { Component } from 'react';
import Emitter from '../../helpers/emitter.class';

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team1: undefined,
            team2: undefined
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.team1 !== this.state.team1 || prevState.team2 !== this.state.team2) && (this.state.team1 !== undefined && this.state.team2 !== undefined)) {
            Emitter.emit('ScoreChanged', { team1: { name: this.props.match.team1.name, score: this.state.team1 }, team2: { name: this.props.match.team2.name, score: this.state.team2 } });
        }
    }

    render() {
        const { match } = this.props;
        const { team1, team2 } = this.state;
        return (
            <div className="matches-match" style={{ display: this.props.display || null }}>
                <div className="matches-team--left">
                    <img className="team-logo" src={match.team1.logo} alt="" />
                    <div style={{ margin: '0 5px' }}>{match.team1.name}</div>
                    <input value={team1} onChange={e => this.setState({ team1: e.target.value })} className="input" type="text" />
                </div>
                <div className="matches-separator">{' - '}</div>
                <div className="matches-team--right">
                    <input value={team2} onChange={e => this.setState({ team2: e.target.value })} className="input" type="text" />
                    <div style={{ margin: '0 5px' }}>{match.team2.name}</div>
                    <img className="team-logo" src={match.team2.logo} alt="" />
                </div>
            </div>
        );
    }
}

export default Match;