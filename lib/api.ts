import qs from 'qs';

const fetchAPI = async (path, urlParamsObject = {}, options = {}) => {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `http://localhost:1337/api${path}${
    queryString ? `${queryString}` : ''
  }`;

  const res = await fetch(requestUrl, mergedOptions);
  if (!res.ok) {
    console.log(requestUrl);
  }
  const data = await res.json();
  return data.data;
};

export const getProjects = async () => {
  const projects = await fetchAPI('/projects?populate=*');
  return projects;
};
