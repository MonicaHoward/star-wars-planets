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
      var planetNames = data.results.map(function(result) {
        console.log('Planet: ', result.name)
      })

    });
  }

  render() {

    return (
      <div className="main">
          <ul>
            <li>stuff</li>
          </ul>
      </div>
    );
  }
}

export default Main;
