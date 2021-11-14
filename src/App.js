import React from 'react';

import Home from './scss/pages/Home';
import Cart from './scss/pages/Cart';
import {Header} from './scss/components';
import {Route} from 'react-router-dom'


function App () { 
   
  


 return (
  <div className="wrapper">
  <Header />
  <div className="content">
    <Route path="/" component = {Home} exact />
    <Route path="/cart" component ={Cart} exact />
  </div>
</div>
 );
}

export default App;
