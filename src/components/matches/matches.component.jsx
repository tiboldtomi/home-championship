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
                    { team1: { name: 'Manchester United', logo: 'logos/manutd.png' }, team2: { name: 'Paris Saint Germain', logo: 'logos/psg.png' } },
                    { team1: { name: 'Juventus', logo: 'logos/juventus.png' }, team2: { name: 'Manchester United', logo: 'logos/manutd.png' } }
                ],
                [
                    { team1: { name: 'FC Barcelona', logo: 'logos/barcelona.png' }, team2: { name: 'Manchester City', logo: 'logos/mancity.png' } },
                    { team1: { name: 'Real Madrid', logo: 'logos/realmadrid.png' }, team2: { name: 'FC Barcelona', logo: 'logos/barcelona.png' } },
                    { team1: { name: 'Manchester City', logo: 'logos/mancity.png' }, team2: { name: 'Real Madrid', logo: 'logos/realmadrid.png' } }
                ],
                [
                    { team1: { name: 'Paris Saint Germain', logo: 'logos/psg.png' }, team2: { name: 'Manchester City', logo: 'logos/mancity.png' } },
                    { team1: { name: 'Manchester United', logo: 'logos/manutd.png' }, team2: { name: 'FC Barcelona', logo: 'logos/barcelona.png' } },
                    { team1: { name: 'Juventus', logo: 'logos/juventus.png' }, team2: { name: 'Real Madrid', logo: 'logos/realmadrid.png' } }
                ],
                [
                    { team1: { name: 'FC Barcelona', logo: 'logos/barcelona.png' }, team2: { name: 'Juventus', logo: 'logos/juventus.png' } },
                    { team1: { name: 'Real Madrid', logo: 'logos/realmadrid.png' }, team2: { name: 'Paris Saint Germain', logo: 'logos/psg.png' } },
                    { team1: { name: 'Manchester City', logo: 'logos/mancity.png' }, team2: { name: 'Manchester United', logo: 'logos/manutd.png' } }
                ]
            ]
        };
    }

    renderMatches = () => {
        const { matches, activeIndex } = this.state;
        return (
            <div>
                {matches[activeIndex].map(match => <Match match={match} />)}
            </div>
        );
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <div className="matches-main">
                <div className="matches-title">{'Fordulók'}</div>
                <div className="matches-rounds">
                    {
                        [0, 1, 2, 3].forEach(i => (<div onClick={() => this.setState({ activeIndex: i })} className={activeIndex === i && 'active'}>{`${i + 1}. forduló`}</div>))
                    }
                </div>
                <div>
                    {this.renderMatches()}
                </div>
            </div>
        );
    }
}

export default Matches;