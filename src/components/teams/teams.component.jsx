import './teams.style.scss';
import React, { Component } from 'react';

class Teams extends Component {
    render() {
        return (
            <div className="teams-main">
                <table className="table">
                    <tr className="table-title"><td colSpan="3">{'Csapatok'}</td></tr>
                    <tr className="table-title--secondary">
                        <td>{'Név'}</td>
                        <td>{'1. csapat'}</td>
                        <td>{'2. csapat'}</td>
                    </tr>
                    <tr className="table-data">
                        <td>{'Tibi'}</td>
                        <td><div className="team-cell"><img className="team-logo" src="logos/manutd.png" alt=""/><span>{'Manchester United'}</span></div></td>
                        <td><div className="team-cell"><img className="team-logo" src="logos/realmadrid.png" alt=""/><span>{'Real Madrid'}</span></div></td>
                    </tr>
                    <tr className="table-data">
                        <td>{'Bence'}</td>
                        <td><div className="team-cell"><img className="team-logo" src="logos/juventus.png" alt=""/><span>{'Juventus'}</span></div></td>
                        <td><div className="team-cell"><img className="team-logo" src="logos/mancity.png" alt=""/><span>{'Manchester City'}</span></div></td>
                    </tr>
                    <tr className="table-data">
                        <td>{'Tomi'}</td>
                        <td><div className="team-cell"><img className="team-logo" src="logos/psg.png" alt=""/><span>{'Paris Saint Germain'}</span></div></td>
                        <td><div className="team-cell"><img className="team-logo" src="logos/barcelona.png" alt=""/><span>{'FC Barcelona'}</span></div></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Teams;

