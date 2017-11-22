import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((<Main />), document.getElementById('root'))
registerServiceWorker();
