import axios from 'axios';

const route = (url) => {
  const result = new URL('/raw', 'https://hexlet-allorigins.herokuapp.com');
  result.searchParams.set('url', url);
  result.searchParams.set('disableCache', 'true');
  return result.toString();
};

const parser = new DOMParser();

export default (url) => axios.get(route(url)).then((response) => response.data)
  .then((data) => parser.parseFromString(data, 'text/xml'));
