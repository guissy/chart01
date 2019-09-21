import React from 'react';
import ReactDOM from 'react-dom';
import Earth from './Earth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Earth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
