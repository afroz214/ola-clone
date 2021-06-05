//eslint-disable-next-line
import { object } from "prop-types";

export * from './validations';

export const useQuery = search => {
  return new URLSearchParams(search);
};

export const getFirstError = errors => {
  const keys = Object.keys(errors);
  const error = keys && keys.length > 0 ? errors[keys[0]] : '';
  return error && error.length > 0 ? error[0] : '';
};

export const processData = (data) => {
  if (!data) return data;
  const dataStr = JSON.stringify(data);
  dataStr.replace(/true/g, 1);
  dataStr.replace(/false/g, 0);
  return JSON.parse(dataStr);
};

export const checkBool = bool => {
  return typeof bool === 'boolean' ||
    (typeof bool === 'object' &&
      bool !== null &&
      typeof bool.valueOf() === 'boolean');
};

export const downloadFile = (url, options, isTarget) => {
  const link = document.createElement('a');
  if (options)
    link.setAttribute('href', `options${encodeURIComponent(url)}`);
  if (isTarget) {
    link.setAttribute('target', `_blank`);
  }
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// all error
export const serializeError = (payload) => {
  let message = ''
  if (typeof payload === 'string')
    message = payload;
  else if (typeof payload === 'object') {
    for (const property in payload) {
      message = `${message}
${payload[property][0]}`;
    }
  }
  return (message === '') ? 'Network Error' : message;
};

// common action creatre(single get & post)
export const actionStructre = async (dispatch, onSuccess, onError, api, payload) => {
  const { data, message, errors, success } = await api(payload);
  console.log(data, message, errors, success)
  if (data.data || success) {
    dispatch(onSuccess(data.data || message));
  }
  else {
    dispatch(onError(message || errors));
    console.error("Error", message || errors);
  }
};

// common action creatre(single get & post)
export const actionStructreBoth = async (dispatch, onSuccess, onError, api, payload) => {
  const { data, message, errors, success } = await api(payload);
  if (data.data && success) {
    dispatch(onSuccess(data.data || message));
  }
  else {
    dispatch(onError(message || errors));
    console.error("Error", message || errors);
  }
};

export const numOnly = (event) => {
  let key = event.keyCode || event.which;
  if (event.shiftKey === false && (
    (key >= 48 && key <= 57) ||
    (key >= 96 && key <= 105) ||
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 16 ||
    key === 17 ||
    key === 20 ||
    key === 35 ||
    key === 36 ||
    key === 37 ||
    key === 39 ||
    key === 46)
    // key === 144
  ) {
  } else {
    event.preventDefault();
  }
};

export const noSpace = (event) => {
  let key = event.keyCode || event.which;
  if (key === 32) {
    event.preventDefault();
  }
};

export const toDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return new Date(year, month - 1, day);
}

export const scrollToTargetAdjusted = (id, offsetVal) => {
  var element = document.getElementById(`${id}`);
  if (element) {
    const offset = offsetVal || 45;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export const reloadPage = (url) => {
  const link = document.createElement('a');
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const randomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

