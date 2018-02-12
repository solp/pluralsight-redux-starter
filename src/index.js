import 'babel-polyfill'; //there's a set of features that babel does not transpile
import React from 'react';
import { render } from 'react-dom'; //when we are doing web development so we have render fuction for browser
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //Provider attaches our store to our React component

const store = configureStore (); //here, we're not passing parameters because on the reducer parameters we're initialising if we put it here we will override those parameters
//when use it? when we need to pass something from the serveror store in local store
render(
	<Provider store = {store}> //it wraps our complete app to connect with the store
    	<Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
