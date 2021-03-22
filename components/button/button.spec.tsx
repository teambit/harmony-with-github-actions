import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render a test button', () => {
    const { getByText } = render(<Button>test button</Button>);
    const testButton = getByText(/test button/i);
    expect(testButton).toBeTruthy();
  });
});
