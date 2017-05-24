import React from 'react';
import $ from  'jquery';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      planetNames: [],
      names: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/planets'
    })
    .done((data) => {
      var planetNames = data.results

    });
  }

  render() {

    let list = this.state.planetData.map((planet) => {
        return (
          <ul>
            <li>{planet.date}</li>
          </ul>
      )
      });

    return (
      <div className="main">
          <ul>
            <li>{list}</li>
          </ul>
      </div>
    );
  }
}

export default Main;
