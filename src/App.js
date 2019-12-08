import React from 'react'
// import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import HomePage from './home'

function App() {
  return (
    <div className="App">
      {/* <Provider> */}
        <Router>
          <Route path="/" component={ HomePage }></Route>
        </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
