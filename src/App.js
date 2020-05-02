import React from 'react';
import ReacDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Cart';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {"items":[{"name":"item 1","price":{"actual":319,"display":900},"discount":64},{"name":"item 2","price":{"actual":319,"display":900},"discount":64},{"name":"item 3","price":{"actual":319,"display":900},"discount":64},{"name":"item 4","price":{"actual":319,"display":900},"discount":64},{"name":"item 5","price":{"actual":319,"display":900},"discount":64},{"name":"item 6","price":{"actual":319,"display":900},"discount":64},{"name":"item 7","price":{"actual":319,"display":900},"discount":64},{"name":"item 8","price":{"actual":319,"display":900},"discount":64},{"name":"item 9","price":{"actual":319,"display":900},"discount":64},{"name":"item 10","price":{"actual":319,"display":900},"discount":64},{"name":"item 11","price":{"actual":319,"display":900},"discount":64},{"name":"item 12","price":{"actual":319,"display":900},"discount":64},{"name":"item 13","price":{"actual":319,"display":900},"discount":64},{"name":"item 14","price":{"actual":319,"display":900},"discount":64}],
                  "cart":0
                 };
    this.updateCart = this.updateCart.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  };
  updateCart(event){
    this.setState({cart: this.state.cart+1});
  }
  changeFilter()
  {
    alert('123');
  }
  render(){
    return(
      <div className="flex-container">
        <Header cartprop={this.state.cart} />
        <div className="innerWrap">
            <Filters filterProp={this.changeFilter}/> 
            <div className="RootCart">
              <MySort />
                {this.state.items.map((dynamicComponent, i) => <Content 
                          key = {i} componentData = {dynamicComponent}  updateCart={this.updateCart}/>)}
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}


class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <span><i className="fa fa-search"></i></span>
        <span><i className="fa fa-shopping-cart"></i>
                  &nbsp;
                  <b>{this.props.cartprop}</b></span>  
      </div>
    )
  }
}


class Filters extends React.Component{
  render(){
    return(
      <div className="filters">
        <h3>Filters</h3>
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
        <p>Value: <span id="demo"></span></p>
        <button className="btn_a">Apply</button>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
     return (
        <div className="Cart_content">
          <div className="item_img"><img src={require('./img/laptop.jpg')} alt="Item"/></div>
           <div>{this.props.componentData.name}</div>
           <div>
             <b>&#8377; {this.props.componentData.price.display}</b>&nbsp;
             <strike>{this.props.componentData.price.actual}</strike>&nbsp;
             <span>{this.props.componentData.discount}% off</span>
           </div>
           
           <button className="btn" onClick={this.props.updateCart}>Add to cart</button>
        </div>
     );
  }
}

class MySort extends React.Component{
  render(){
    return(
      <div className="sorting">
        <h4>Sort By</h4>
        <ul>
          <li>Price--High Low</li>
          <li>Price--Low High</li>
          <li>Discount</li>
        </ul>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
       &copy;Copyright
      </div>
    )
  }
}

export default App;
