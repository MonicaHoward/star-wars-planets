import React from 'react';
import $ from  'jquery';

class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      planetData: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/planets'
    });
    done((data) => {
      this.state({
        planetData: data.results

      })
    });
  }

  render() {
    return (
      <div className="main">
        <h1>PLANTS GO HERE</h1>
      </div>
    );
  }
}

export default Main;
