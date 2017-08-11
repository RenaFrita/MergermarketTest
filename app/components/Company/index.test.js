import React from 'react';
import Company from './index.jsx';
import renderer from 'react-test-renderer';

test('Company component markup', () => {
  const component = renderer.create(
    <Company
      name={'Sony'}
      description={'Sony Description'}
      type={'List'}
      headquarter={'USA'}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
