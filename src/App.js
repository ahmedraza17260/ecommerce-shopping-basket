import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Product";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import "./App.css";
import Copyright from "./components/Copyright";
import store from "./store";
// import { makeServer } from './Mirage/server';


//"homepage": "https://ahmedraza17260.github.io/shopping-basket/",
//"server": "json-server public/db.json --port 8000",
//"predeploy": "npm run build",
//"deploy": "gh-pages -d build",


//    "imageUrl": "/src/Json/products/img1_1.jpg",

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
              <Copyright />
            </div>
          </div>
        </div>
        <div className="copyRight" >
          <h4 style={{ color: "black" }}> Powered by Ahmed Raza </h4>
          <a style={{ color: "black" }} href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
            {" "}
            <h3 style={{ color: "black" }}> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
          </a>
          <h3 style={{ color: "black" }}> All Right Reserved </h3>
        </div>
      </Provider>
    );
  }
}

export default App;
