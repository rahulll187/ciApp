import { ApiConfig, AppVersion } from '../config';

const axios = require('axios');

/** Create cancel token  ***/
const CancelToken = axios.CancelToken;
let source = CancelToken.source();

/** Set base url for api */
axios.defaults.baseURL = 'http://54.254.44.119:8091';
axios.defaults.timeout = 10000;

/** Set common header parameters */
axios.defaults.headers.common = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  // 'App-Version': AppVersion.number
};

/**
 * Set header authorization
 * @param token     Authorization token
 */
const setHeaderAuthorization = (token: string | null | undefined) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = null;
  }
};

/**
 * Cancel all Request
 */
const cancelAllRequest = () => {
  source.cancel();
  setTimeout(() => {
    source = CancelToken.source();
  }, 1500);
};

/**
 * Parse and return HTTP API response
 * @param res
 */
const getResponse = (res?: any) => {
  if (res && res.status === 200) {
    return res.data;
  }
  throw new Error('Something went wrong');
};

/**
 * Get request
 * @param path      API url path
 * @param params    Request parameters
 */
const get = (path: string, params?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(path, { params, cancelToken: source.token })
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Post request
 * @param path      API url path
 * @param params    Request parameters
 */
const post = (path: string, params?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(path, params || {}, { cancelToken: source.token })
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Put request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
const put = (path: string, params?: any, headers?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .put(path, params || {}, { headers, cancelToken: source.token })
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  get,
  post,
  put,
  setHeaderAuthorization,
  cancelAllRequest
};
