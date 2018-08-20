import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../Reducers';


const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(connectRouter(history)(rootReducer),
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)));

  return { store };
};

export default configureStore;
