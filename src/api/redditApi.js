export const API_ROOT = 'https://www.reddit.com';

export const getSearchResults = async (searchterm) => {
  const cleanSearchterm = searchterm.replace(/ /g,'%20');
  console.log(searchterm, cleanSearchterm);

  const response = await fetch(`${API_ROOT}/search.json?q=${cleanSearchterm}`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};