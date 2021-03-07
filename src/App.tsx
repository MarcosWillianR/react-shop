import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './routes';

import store from './store';

import ProductItemModal from './components/ProductItemModal';
import Footer from './components/Footer';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppProvider>
        <Router />

        <ProductItemModal />
        <Footer />
      </AppProvider>
    </Provider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
