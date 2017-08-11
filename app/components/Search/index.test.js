import React from 'react';
import Search from './index.jsx';
import renderer from 'react-test-renderer';

test('Search component markup', () => {
  const mockFn = jest.fn();
  const component = renderer.create(
    <Search
      query={mockFn}
      reset={mockFn}
      queryString={''}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
