import React from 'react';
import { render } from '@testing-library/react';
import { NotificationBox } from './notification-box';

describe('Button', () => {
  it('should render a test button', () => {
    const { getByText } = render(<NotificationBox>test notification</NotificationBox>);
    const testNotification = getByText(/test notification/i);
    expect(testNotification).toBeInTheDocument();
  });
});