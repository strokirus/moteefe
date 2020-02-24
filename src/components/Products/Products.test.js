import React from 'react';
import renderer from 'react-test-renderer';
import Products from './Products';

const props = { title: 'Header' };

describe('(Component) Products', () => {
  it('should render an Products with result', () => {
    const tree = renderer.create(<Products {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
