import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Picker from '../../../adapters/alipay/components/Picker';

describe('Picker', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Picker />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
