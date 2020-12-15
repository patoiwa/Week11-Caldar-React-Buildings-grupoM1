import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Table from './components/Table'
import buildingsData from './data/buildings'

import './App.css';

class App extends Component {
  state = {
    buildings: buildingsData
  }

  // Delete Item
  delItem = (id) => {
    this.setState({
      buildings: [...this.state.buildings.filter(building => building.id !== id)] 
    });
  }

  render() {
    return (
        <div className="App">
            <Header />
            <AddItem addItem={this.addItem} />
            <Table buildings={this.state.buildings} delItem={this.delItem} />
        </div>
    );
  }
}
export default App;