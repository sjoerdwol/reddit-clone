import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { Startpage } from '../src/components/Startpage';

describe('Startpage Component', () => {
  it('Startpage renders Welcome Title', () => {
    render(<Startpage />);

    const welcome_title = screen.getByTestId('welcome_title');

    expect(welcome_title).toBeVisible;
  })

  it('Startpage renders Welcome Instruction', () => {
    render(<Startpage />);

    const welcome_instruction = screen.getByTestId('welcome_instruction');

    expect(welcome_instruction).toBeVisible;
  })
})
