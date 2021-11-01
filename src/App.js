import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Login from "./components/Login"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
{/* <h2>Hello We will build a Youtube DisneyPlus today🚀!</h2> */}