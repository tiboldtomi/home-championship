import './tabella.style.scss';
import React, { Component } from 'react';

class Tabella extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [
                { id: 0, name: 'Tibi', team: 'Manchester United', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { id: 1, name: 'Tibi', team: 'Real Madrid', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { id: 2, name: 'Bence', team: 'Juventus', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { id: 3, name: 'Bence', team: 'Manchester City', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { id: 4, name: 'Tomi', team: 'Paris Saint Germain', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { id: 5, name: 'Tomi', team: 'FC Barcelona', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
            ]
        };
    }

    renderRow = (row, index) => {
        let bgColor;
        switch (index + 1) {
            case 1: bgColor = 'gold';
                break;
            case 2: bgColor = 'silver';
                break;
            case 3: bgColor = '#b8860b';
                break;
            default: bgColor = '#fff';
                break;
        };
        return (
            <div className="tabella-infos">
                <div style={{ color: bgColor }}>{`${index + 1}.`}</div>
                <div>{row.name}</div>
                <div>{row.team}</div>
                <div>{row.matches}</div>
                <div>{row.scored}</div>
                <div>{row.got}</div>
                <div>{row.gd}</div>
                <div>{row.point}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="tabella-main">
                <div className="tabella-title">{'Tabella'}</div>
                <div style={{ borderBottom: '2px solid #fff' }} className="tabella-infos">
                    <div>{'Helyezés'}</div>
                    <div>{'Név'}</div>
                    <div>{'Csapat'}</div>
                    <div>{'Lejátszott meccsek'}</div>
                    <div>{'Lőtt gólok'}</div>
                    <div>{'Kapott gólok'}</div>
                    <div>{'Gólkülönbség'}</div>
                    <div>{'Pont'}</div>
                </div>
                <div>
                    {this.state.teams.map((team, index) => this.renderRow(team, index))}
                </div>
            </div >
        );
    }
}

export default Tabella;