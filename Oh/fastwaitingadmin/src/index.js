import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
