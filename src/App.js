import React, {useEffect} from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();

  // this hook runs based on a given condition

  // with [] parameter, this hook is going to run only once
  useEffect(() => {
    // firebase event listener function
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          // pass the user detected by firebase event listener
          // to data layer
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
        
      }
    });

    return() => {
      // any cleanup operations go in here

      // If the app re-renders, it would detach and
      // reattach it to a new listener
      unsubscribe()
    }
  }, []);

  console.log(user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* This is the default route. If route doesn't match anything, it will load this */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
