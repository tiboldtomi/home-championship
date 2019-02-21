import './matches.style.scss';
import React, { Component } from 'react';

class Matches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };
    }

    renderMatches = () => {
        let matches;
        switch (this.state.activeIndex) {
            case 0:
                matches = (
                    <div>
                        <div className="matches-match">
                            <div className="matches-team--left">
                                <img className="team-logo" src="logos/psg.png" alt="" />
                                <div style={{ margin: '0 20px' }}>{'Paris Saint Germain'}</div>
                                <input className="input" type="text" />
                            </div>
                            <div className="matches-separator">{' - '}</div>
                            <div className="matches-team--right">
                                <input className="input" type="text" />
                                <div style={{ margin: '0 20px' }}>{'Juventus'}</div>
                                <img className="team-logo" src="logos/juventus.png" alt="" />
                            </div>
                        </div>
                        <div className="matches-match">
                            <div className="matches-team--left">
                                <img className="team-logo" src="logos/manutd.png" alt="" />
                                <div style={{ margin: '0 20px' }}>{'Manchester United'}</div>
                                <input className="input" type="text" />
                            </div>
                            <div className="matches-separator">{' - '}</div>
                            <div className="matches-team--right">
                                <input className="input" type="text" />
                                <div style={{ margin: '0 20px' }}>{'Paris Saint Germain'}</div>
                                <img className="team-logo" src="logos/psg.png" alt="" />
                            </div>
                        </div>
                        <div className="matches-match">
                            <div className="matches-team--left">
                                <img className="team-logo" src="logos/juventus.png" alt="" />
                                <div style={{ margin: '0 20px' }}>{'Juventus'}</div>
                                <input className="input" type="text" />
                            </div>
                            <div className="matches-separator">{' - '}</div>
                            <div className="matches-team--right">
                                <input className="input" type="text" />
                                <div style={{ margin: '0 20px' }}>{'Manchester United'}</div>
                                <img className="team-logo" src="logos/manutd.png" alt="" />
                            </div>
                        </div>
                    </div>
                );
                break;
            default: break;
        }
        return matches;
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <div className="matches-main">
                <div className="matches-title">{'Fordulók'}</div>
                <div className="matches-rounds">
                    <div onClick={() => this.setState({ activeIndex: 0 })} className={activeIndex === 0 && 'active'}>{'1. forduló'}</div>
                    <div onClick={() => this.setState({ activeIndex: 1 })} className={activeIndex === 1 && 'active'}>{'2. forduló'}</div>
                    <div onClick={() => this.setState({ activeIndex: 2 })} className={activeIndex === 2 && 'active'}>{'3. forduló'}</div>
                    <div onClick={() => this.setState({ activeIndex: 3 })} className={activeIndex === 3 && 'active'}>{'4. forduló'}</div>
                </div>
                <div>
                    {this.renderMatches()}
                </div>
            </div>
        );
    }
}

export default Matches;