import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: "rank"
    }

  }

  handleClickAge = () => {
    this.setState({ sortBy: 'age' })
  }

  handleClickName = () => {
    this.setState({ sortBy: 'name' })
  }

  handleClickPoints = () => {
    this.setState({ sortBy: 'points' })
  }

  handleClickRank = () => {
    this.setState({ sortBy: 'rank' })
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onClickFunction={this.handleClickAge}/>
          <Name onClickFunction={this.handleClickName}/>
          <Points onClickFunction={this.handleClickPoints}/>
          <Rank onClickFunction={this.handleClickRank}/>
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}

