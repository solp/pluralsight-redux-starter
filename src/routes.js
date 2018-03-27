import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';

export default(
	<div>
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="products" component={ProductsPage} />
  </Route>
  </div>
);
