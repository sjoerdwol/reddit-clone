import { screen, fireEvent } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { SearchBar } from '../src/components/SearchBar';

describe('SearchBar Component', () => {
  it('SearchBar gets rendered', () => {
    render(<SearchBar />);

    const searchbar = screen.getByTestId('searchbar');
    const search_input = screen.getByTestId('search_input');
    const search_icon = screen.getByTestId('search_icon');
    
    expect(searchbar).toBeVisible;
    expect(search_icon).toBeVisible;
    expect(search_input).toBeVisible;
  })

  it('SearchBar sets new state on input change', () => {
    render(<SearchBar />);

    const search_input = screen.getByTestId('search_input');
    const onchange = search_input.onchange;
    fireEvent.input(search_input, { target: { value: 'a' }});
    
    expect(onchange).toHaveBeenCalled;
  })

  it('SearchBar input dispatches search on enter press', () => {
    render(<SearchBar />);

    const search_input = screen.getByTestId('search_input');
    const handleDispatch = SearchBar.handleDispatch;
    fireEvent.keyPress(search_input, { key: 'Enter', code: 13, charCode: 13 });
    
    expect(handleDispatch).toHaveBeenCalled;
  })

  it('SearchBar icon dispatches search on click', () => {
    render(<SearchBar />);

    const search_icon = screen.getByTestId('search_icon');
    const onclick = search_icon.onclick;
    fireEvent.click(search_icon);
    
    expect(onclick).toHaveBeenCalled;
  })
})