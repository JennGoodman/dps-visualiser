import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});
