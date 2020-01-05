import {applyMiddleware, createStore} from "redux";
import {Reducers} from './reducers';
import {rootSaga, sagaMiddleware} from './saga';

const store = createStore(Reducers, applyMiddleware(
  sagaMiddleware,
));

sagaMiddleware.run(rootSaga);

export { store };
