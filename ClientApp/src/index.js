import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './store/store';
import registerServiceWorker from './registerServiceWorker';
import { Auth0Provider } from '@auth0/auth0-react';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const store = configStore({});

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter basename={baseUrl}>
//       <App />
//     </BrowserRouter>,
//   </Provider>,
//   rootElement);

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-kmo1e8af48ggu5o1.us.auth0.com"
      clientId="J4ku9qPjFbUMyBZNrDNrgyEDEee5a7AD"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
        <BrowserRouter basename={baseUrl}>
          <App />
        </BrowserRouter>
    </Auth0Provider>
  </Provider>
  , rootElement);

registerServiceWorker();
