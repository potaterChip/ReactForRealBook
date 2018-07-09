import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './DatePicker';

ReactDOM.render(<DatePicker />, document.getElementById('app'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 3000);