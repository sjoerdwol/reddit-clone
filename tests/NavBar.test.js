import { screen, fireEvent } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { NavBar } from '../src/components/NavBar';

describe('NavBar Component', () => {
  it('NavBar displays page title', () => {
    render(<NavBar />);

    const navbar_title = screen.getByTestId('navbar_title');

    expect(navbar_title).toBeVisible;
  })

  it('NavBar displays navigation', () => {
    render(<NavBar />);

    const navbar_navigation = screen.getByTestId('navbar_navigation');

    expect(navbar_navigation).toBeVisible;
  })

  it('NavBar Title Icon executes reset on click', () => {
    render(<NavBar />);

    const navbar_title_icon = screen.getByTestId('navbar_title_icon');
    const navbar_title_icon_onclick = navbar_title_icon.onclick;
    fireEvent.click(navbar_title_icon);

    expect(navbar_title_icon_onclick).toHaveBeenCalled;
  })

  it('NavBar Title Text executes reset on click', () => {
    render(<NavBar />);

    const navbar_title_text = screen.getByTestId('navbar_title_text');
    const navbar_title_text_onclick = navbar_title_text.onclick;
    fireEvent.click(navbar_title_text);

    expect(navbar_title_text_onclick).toHaveBeenCalled;
  })

  it('NavBar Navigation Item calls subreddit render on click', () => {
    render(<NavBar />);

    const navbar_navigation_item = screen.getAllByTestId('navbar_navigation_item')[0];
    const navbar_navigation_item_onclick = navbar_navigation_item.onclick;
    fireEvent.click(navbar_navigation_item);

    expect(navbar_navigation_item_onclick).toHaveBeenCalled;
  })
})