import React from 'react';

import FruitBasket from './FruitBasket';


export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({
        fruit
      }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({
        filters
      }));
  }

  updateFilter = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({
      selectedFilter: event.target.value
    });
  }


  render() {
    return <FruitBasket onUpdateFilter={this.updateFilter} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter}/>
  }
}
