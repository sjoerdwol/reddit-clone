import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { ErrorPage } from '../src/components/ErrorPage';

describe('ErrorPage Component', () => {
  it('ErrorPage displays error title', () => {
    render(<ErrorPage />);

    const error_title = screen.getByTestId('error_title');

    expect(error_title).toBeVisible;
  })

  it('ErrorPage displays error message', () => {
    render(<ErrorPage />);

    const error_message = screen.getByTestId('error_message');

    expect(error_message).toBeVisible;
  })
})