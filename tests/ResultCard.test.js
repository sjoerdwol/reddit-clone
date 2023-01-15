import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { ResultCard } from '../src/components/ResultCard';

describe('ResultCard Component', () => {
  it('ResultCard displays given information', () => {
    const resultObject = {
      title: 'Test Title',
      created_utc: new Date().toUTCString(),
      num_comments: 4
    }
    render(<ResultCard result={resultObject} />)

    const card_title = screen.getByTestId('card_title').innerHTML;
    const card_img = screen.getByAltText('Image of post');
    const card_time = screen.getByTestId('card_time').innerHTML;
    const card_comments = screen.getByTestId('card_comments').innerHTML;

    expect(card_title).toBeVisible;
    expect(card_title).toEqual('Test Title');
    expect(card_img).toBeVisible;
    expect(card_time).toBeVisible;
    expect(card_comments).toBeVisible;
    expect(card_comments).toEqual('4 comments');
  })

  it('Title gets shortened properly when longer than 40 chars', () => {
    const resultObject = {
      title: 'This is a very long title which should not be displayed entirely!'
    }
    const shortenedTitle = resultObject.title.slice(0, 40) + '...';
    render(<ResultCard result={resultObject} />)

    const card_title = screen.getByTestId('card_title').innerHTML;

    expect(card_title).toBeVisible;
    expect(card_title).toEqual(shortenedTitle);
  })

})
