import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import homeMiddleware from '../middleware/homeMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      homeMiddleware,
    ),
  );

const store = createStore(
    rootReducer,
    // preloadedState,
    enhancers,
);

export default store;