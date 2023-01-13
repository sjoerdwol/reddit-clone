import '@testing-library/jest-dom'
import { Startpage } from '../src/components/Startpage';
import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';

test('Startpage renders Welcome Message', () => {
  render(<Startpage />);
  const welcome_title = screen.getByTestId('welcome_title');
  expect(welcome_title).toBeVisible;
})