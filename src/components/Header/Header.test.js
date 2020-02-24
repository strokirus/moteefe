import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

const props = { title: 'Moteefe' };

describe('(Component) Header', () => {
  it('should render an Header with result', () => {
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
