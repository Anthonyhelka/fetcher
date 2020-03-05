import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ products: res.products }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api/products');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className='App'>
        <p>This is a test view!</p>
        {this.state.products.map((product) => {
          return(
            <p key={product.label}>{product.label}, ${product.price}</p>
          );
        })}
      </div>
    );
  }
}

export default App;
