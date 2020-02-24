import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

const props = { title: 'Header' };

describe('(Component) Loading', () => {
  it('should render an Loading with result', () => {
    const tree = renderer.create(<Loading {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
