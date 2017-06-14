import React from 'react';
import $ from  'jquery';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      planetData: [],
      planetNames: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/planets'
    })
    .done((data) => {
      var planetNames = data.results.name
console.log('what do we have?', data.results[1].name)
    });
  }

  render() {
    console.log('what?!?!?!?!?!?', this.state)
    return (
      <div className="main">
          <ul>
            <li>planetNames</li>
          </ul>
      </div>
    );
  }
}

export default Main;
