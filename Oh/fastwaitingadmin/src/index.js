import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // react-redux에서 Provider를 불러옴
import store from './redux/store'; // Redux 스토어를 불러옴
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider로 애플리케이션을 감싸서 Redux 스토어를 제공 */}
      <Login />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
