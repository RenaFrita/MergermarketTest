import React from 'react';
import Companies, { type, headquarter } from './index.jsx';
import renderer from 'react-test-renderer';
import companies from '../../../data/company';

describe('Company component', () => {
  test('should render the correct markup', () => {
    const mockFn = jest.fn();
    const component = renderer.create(
      <Companies
        companies={companies}
        show={mockFn}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('should return empty string', () => {
    let result = type(false, false);
    expect(result).toBe('');
  })

  test('should return a node with ', () => {
    let result = type(true, false);
    expect(result).toMatchObject(<span>Listed Entity</span>);
  })

  test('should return a node with ', () => {
    let result = type(true, true);
    expect(result).toMatchObject(<div><span>Listed Entity</span><span>PEVC House</span></div>);
  })

  test('should return a string with the state and country', () => {
    expect(headquarter({ state: 'Kanto', country: 'Japan'})).toBe('Kanto, Japan');
  });
});
