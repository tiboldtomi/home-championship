import './matches.style.scss';
import React, { Component } from 'react';
import Match from '../match/match.component';

class Matches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            matches: [
                [
                    { team1: { name: 'Paris Saint Germain', logo: 'logos/psg.png' }, team2: { name: 'Juventus', logo: 'logos/juventus.png' } },
                    { team1: { name: 'FC Barcelona', logo: 'logos/barcelona.png' }, team2: { name: 'Paris Saint Germain', logo: 'logos/psg.png' } },
                    { team1: { name: 'Juventus', logo: 'logos/juventus.png' }, team2: { name: 'FC Barcelona', logo: 'logos/barcelona.png' } }
                ],
                [
                    { team1: { name: 'Real Madrid', logo: 'logos/realmadrid.png' }, team2: { name: 'Liverpool', logo: 'logos/liverpool.png' } },
                    { team1: { name: 'Manchester City', logo: 'logos/mancity.png' }, team2: { name: 'Real Madrid', logo: 'logos/realmadrid.png' } },
                    { team1: { name: 'Liverpool', logo: 'logos/liverpool.png' }, team2: { name: 'Manchester City', logo: 'logos/mancity.png' } }
                ],
                [
                    { team1: { name: 'Paris Saint Germain', logo: 'logos/psg.png' }, team2: { name: 'Liverpool', logo: 'logos/liverpool.png' } },
                    { team1: { name: 'FC Barcelona', logo: 'logos/barcelona.png' }, team2: { name: 'Real Madrid', logo: 'logos/realmadrid.png' } },
                    { team1: { name: 'Juventus', logo: 'logos/juventus.png' }, team2: { name: 'Manchester City', logo: 'logos/mancity.png' } }
                ],
                [
                    { team1: { name: 'Real Madrid', logo: 'logos/realmadrid.png' }, team2: { name: 'Juventus', logo: 'logos/juventus.png' } },
                    { team1: { name: 'Manchester City', logo: 'logos/mancity.png' }, team2: { name: 'Paris Saint Germain', logo: 'logos/psg.png' } },
                    { team1: { name: 'Liverpool', logo: 'logos/liverpool.png' }, team2: { name: 'FC Barcelona', logo: 'logos/barcelona.png' } }
                ]
            ]
        };
    }

    renderMatches = () => {
        const { matches, activeIndex } = this.state;
        let _matches = [];
        let i = -activeIndex;
        matches.forEach(round => {
            _matches.push(
                <div className="matches-animated-container" style={{ left: `${i * 42}vw` }}>
                    {round.map(match => <Match match={match} />)}
                </div>
            );
            ++i;
        });
        return _matches;
    }

    render() {
        const { activeIndex, matches } = this.state;
        return (
            <div className="matches-main">
                <div className="matches-title">{'Fordulók'}</div>
                <div className="matches-rounds">
                    {matches.map((match, i) => <div onMouseMove={e => e.preventDefault()} onClick={() => this.setState({ activeIndex: i })} className={activeIndex === i && 'active'}>{`${i + 1}. forduló`}</div>)}
                </div>
                <div className="matches-main-container">
                    {this.renderMatches()}
                </div>
            </div>
        );
    }
}

export default Matches;