export const API_ROOT = 'https://www.reddit.com';

export const getSearchResults = async (searchterm) => {
  const cleanSearchterm = searchterm.replace(/ /g,'%20');

  const response = await fetch(`${API_ROOT}/search.json?q=${cleanSearchterm}`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddit = async (subreddit) => {
  let requestedReddit = subreddit.toLowerCase();
  
  if(requestedReddit === 'celebrity') {
    requestedReddit = 'celebrities';
  }

  const response = await fetch(`${API_ROOT}/r/${requestedReddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};