import React from 'react';
import $ from  'jquery';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      planetData: [],
      planetName: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/planets'
    })
    .done((data) => {
      this.setState({
        planetData: {},
        planetName: []
      })
    });
  }

  const planetArr = data.results.map((p))


  render() {
    let planetName = planetData.map((results) => {
      return
      <ul>
        <li>{results.name}</li>
      </ul>
    });

    return (
      <div className="main">
          <ul>
            <li>{planetName}</li>
          </ul>
      </div>
    );
  }
}

export default Main;
