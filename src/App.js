import logo from "./logo.svg";
import "./App.css";
import { Home, About } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </div>
      </Router>
    );

};

export default App;
