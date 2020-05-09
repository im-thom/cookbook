import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./redux/index";
import rootSaga from "./sagas"


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,  
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f    
    )
)

sagaMiddleware.run(rootSaga)

export default store