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
      const planetData = data.results
      console.log('what do we have?', data.results);
    });
  }

  render() {
    const planetNames=this.state.planetData.map((planet) => {
      return (
        <ul key={planet.name}>
          <li>planetData</li>
        </ul>
      )
    });
    console.log('IN THE RENDER',planetNames)

    return (
      <div className="main">

        <ol>{planetNames}</ol>

      </div>
    );
  }
}

export default Main;
