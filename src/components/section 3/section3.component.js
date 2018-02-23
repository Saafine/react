import React, { Component } from 'react';
import axios from 'axios';

class Section3Component extends Component {
  constructor() {
    super();
    this.state = {
      bitcoin: null
    };
    this.getBitcoinPrice = this.getBitcoinPrice.bind(this);
  }

  componentWillMount() {
    this.getBitcoinPrice();
  }

  getBitcoinPrice() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR')
      .then((response) => {
        this.updateBitcoinPrice(response.data[0].price_usd);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateBitcoinPrice(price) {
    this.setState({ bitcoin: price });
  }

  render() {
    return (
      <div>
        <div> Hey I am inside a section 3 (testing http requests)</div>
        <button className="button button-s button-primary" onClick={ this.getBitcoinPrice }>Fire to fetch bitcoin's current price:</button>
        <div className="bold-700">Bitcoin's value: { this.state.bitcoin }</div>
      </div>
    );
  }
}

export default Section3Component;
