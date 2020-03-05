import React from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
function App() {
  var products = [
      {
          id : 1,
          name: "Vsmart Joy3",
          price: "3.000.000 VNĐ",
          img : "joy3.png",
          status: true
      },
      {
          id : 2,
          name: "Realme Q",
          price: "5.000.000 VNĐ",
          img : "realme.png",
          status: true
      },
      {
          id : 3,
          name: "Vsmart Live",
          price: "5.000.000 VNĐ",
          img : "vsmart.png",
          status: true
      },
      {
        id : 4,
        name: "Iphone XS Max",
        price: "15.000.000 VNĐ",
        img : "iphone.png",
        status: true,
    },

  ];
 
  let a = products.map((x,i) =>{
      if(x.status === true){
          return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <Product name={x.name}
                          price={x.price}
                          img = {x.img}></Product>
                  </div>
      }
  })
  return (
      <div>
        <Header />
        <div className="row">
          {a}
        </div>
      </div>
  );
}

export default App;
