import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import StoreMain from './pages/StoreMain/StoreMain';
import StoreWaitingSet from './pages/StoreWaitingSet/StoreWaitingSet';
import ReserveMain from './pages/ReserveMain/ReserveMain';
import ReserveApplication from './pages/ReserveApplication/ReserveApplication';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/storemain" element={<StoreMain />} />
          <Route path="/storewaitingset" element={<StoreWaitingSet />} />
          <Route path="/reservemain" element={<ReserveMain />} />
          <Route path="/reserveapplication" element={<ReserveApplication />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);

reportWebVitals();
