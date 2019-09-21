import React from 'react';
import ReactDOM from 'react-dom';
import Earth from './Earth';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Earth />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('正确的渲染', () => {
  const tree = renderer
    .create(<Earth />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
