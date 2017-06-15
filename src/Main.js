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

      console.log('what do we have?', data)
    });
  }

  render() {
    const planetNames = this.state.planetNames;
    console.log('IN THE RENDER', planetNames)

    return (
      <div className="main">
          <ul>
            <li>{planetNames}</li>
          </ul>
      </div>
    );
  }
}

export default Main;
