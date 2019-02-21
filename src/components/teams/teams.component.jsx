import './teams.style.scss';
import React, { Component } from 'react';

class Teams extends Component {
    render() {
        return (
            <div className="main">
                <table className="table">
                    <tr className="table-title"><td colSpan="3">{'Csapatok'}</td></tr>
                    <tr className="table-title--secondary">
                        <td>{'Név'}</td>
                        <td>{'1. csapat'}</td>
                        <td>{'2. csapat'}</td>
                    </tr>
                    <tr className="table-data">
                        <td>{'Tibi'}</td>
                        <td>{'Manchester United'}</td>
                        <td>{'Real Madrid'}</td>
                    </tr>
                    <tr className="table-data">
                        <td>{'Bence'}</td>
                        <td>{'Juventus'}</td>
                        <td>{'Manchester City'}</td>
                    </tr>
                    <tr className="table-data">
                        <td>{'Tomi'}</td>
                        <td>{'Paris Saint Germain'}</td>
                        <td>{'Bayern München'}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Teams;

