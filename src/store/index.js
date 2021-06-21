import { createStore, compose, applyMiddleware } from 'redux';


import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      // mes Middlewares,
    ),
  );

const store = createStore(
    rootReducer,
    // preloadedState,
    enhancers,
);

export default store;