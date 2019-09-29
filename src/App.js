import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Profile from "./components/Profile";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)))

function App() {
  return (
      <Provider store={store} >
          <div className="App">
              <Profile/>
          </div>
      </Provider>


  );
}

export default App;
