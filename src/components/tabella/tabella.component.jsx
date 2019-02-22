import './tabella.style.scss';
import React, { Component } from 'react';
import Emitter from '../../helpers/emitter.class';

class Tabella extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [
                { name: 'Tibi', team: 'Manchester United', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { name: 'Tibi', team: 'Real Madrid', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { name: 'Bence', team: 'Juventus', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { name: 'Bence', team: 'Manchester City', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { name: 'Tomi', team: 'Paris Saint Germain', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
                { name: 'Tomi', team: 'FC Barcelona', matches: 0, scored: 0, got: 0, gd: 0, point: 0 },
            ]
        };
    }

    componentWillMount() {
        Emitter.on('ScoreChanged', (result) => this.scoreChanged(result));
    }

    scoreChanged = (result) => {
        let _teams = [...this.state.teams];
        _teams.forEach(row => {
            if (row.team === result.team1.name) {
                row.matches += 1;
                row.scored += parseInt(result.team1.score);
                row.got += parseInt(result.team2.score);
                row.gd = row.scored - row.got;
                result.team1.score > result.team2.score ? row.point += 3 : result.team1.score === result.team2.score && (row.point += 1);
            }
            else if (row.team === result.team2.name) {
                row.matches += 1;
                row.scored += parseInt(result.team2.score);
                row.got += parseInt(result.team1.score);
                row.gd = row.scored - row.got;
                result.team2.score > result.team1.score ? row.point += 3 : result.team2.score === result.team1.score && (row.point += 1);
            }
        });
        _teams.sort((a, b) => b.point - a.point !== 0 ? b.point - a.point : b.gd - a.gd);
        this.setState({ teams: _teams });
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
                <div className="tabella-infos">
                    <div>{'Helyezés'}</div>
                    <div>{'Név'}</div>
                    <div>{'Csapat'}</div>
                    <div>{'Lejátszott meccsek'}</div>
                    <div>{'Lőtt gólok'}</div>
                    <div>{'Kapott gólok'}</div>
                    <div>{'Gólkülönbség'}</div>
                    <div>{'Pont'}</div>
                </div>
                {this.state.teams.map((team, index) => this.renderRow(team, index))}
            </div >
        );
    }
}

export default Tabella;