import React from 'react';
import axios from 'axios'


export default class Hello extends React.Component {
  render() {
    axios.get('http://demo0532507.mockable.io/')
      .then(res => console.log(res.data))

      axios.get('/pages/api')
        .then(res => console.log(res.data))

    return <div>Hello {this.props.name}!</div>
  }
}


// Render component with data
