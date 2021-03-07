import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useModal } from '../hooks/Modal';

import ProductItemModal from '../components/ProductItemModal';
import InfoModal from '../components/InfoModal';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

const Router: React.FC = () => {
  const { productItemModalIsVisible, infoModalIsVisible } = useModal();

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>

      {productItemModalIsVisible && <ProductItemModal />}
      {infoModalIsVisible && <InfoModal />}
    </>
  );
};

export default Router;
