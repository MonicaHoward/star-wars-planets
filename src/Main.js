import React from 'react';
import $ from  'jquery';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      planetNames: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/planets'
    })
    .done((data) => {
      // const planetData = data.results.map((names))
      this.setState({
        planetNames: []
      })
    });
  }



  render() {
    return (
      <div className="main">
          <ul>
            <li>more stuff</li>
          </ul>
      </div>
    );
  }
}

export default Main;
