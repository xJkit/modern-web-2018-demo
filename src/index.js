import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

import 'trendmicro-ui/dist/css/trendmicro-ui.css';
injectGlobal`
  body {
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
