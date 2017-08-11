import React from 'react';
import App from './index.jsx';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App component', () => {
  test('should render the correct markup', () => {
    const mockFn = jest.fn();
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  const app = mount(<App />);
  test('should display 5 results', () => {
    app.find('input').simulate('change', {target: {value: 'son'}});
    expect(app.state(['view']).length).toBe(5);
  });

  test('should display 10 results', () => {
    app.find('.companies-more').simulate('click');
    expect(app.state(['view']).length).toBe(10);
  });

  test('should display 0 results', () => {
    app.find('.search-clear').simulate('click');
    expect(app.state(['view']).length).toBe(0);
  });
});
