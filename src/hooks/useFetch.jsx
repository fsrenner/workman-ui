function useFetch() {

  const BASE_URL = "http://localhost:3000";
  const APPLICATION_JSON = "application/json";

  const handleResponse = async (response) => {
    const data = await response.json() || null;
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  }

  const request = (method) => {
    return (endpoint, body, credentials) => {
      const requestOptions = {
        method,
        credentials,
      };
      const url = `${BASE_URL}${endpoint}`;
      if (body) {
        requestOptions.headers = { 'Content-Type': APPLICATION_JSON };
        requestOptions.body = JSON.stringify(body);
      }
      console.log(requestOptions)
      return fetch(url, requestOptions).then(handleResponse);
    };
  };

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
  };
}

export { useFetch };