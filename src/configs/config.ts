export const CONFIG = {
  URLS: {
    GET_PRODUCTS: (size: number) =>
      `https://random-data-api.com/api/coffee/random_coffee?size=${size}`,
  },
  HTTP_METHODS: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  },
};
