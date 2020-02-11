import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {
  state = {
    basket: 0
  }

  addToBasket = () => {
    console.log("Add to Basket was clicked");
    this.setState({
      basket: this.state.basket + 1
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar myBasket={this.state.basket} />
          <Switch>
            <Route exact path='/' render={() => <Home addToBasket={this.addToBasket} />} />
            {/* <Home addToBasket={this.addToBasket} /> */}
            <Route path='/about' component={About} /> 
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}



export default App;
