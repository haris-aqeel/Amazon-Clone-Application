import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {useEffect} from 'react';
import {auth} from './firebase'

function App() {

  const [{user}, dispatch] = useStateValue();
  //Piece of Code runs on the basis of condition
  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch({
          type:"Set_User",
          user: authUser
        })
      }else{
        dispatch({
          type:"Set_User",
          user: null
        })
      }
    })

    return() =>{
      unSubscribe();

    }
  }, []);

  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
              <Login />
          </Route> 
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
