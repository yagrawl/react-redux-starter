import { LOG_IN,
         LOAD_USER,
         LOG_OUT,
         LOADING,
         AUTH_ERROR } from './types';

export function loginAction(data) {
  return {
    type: LOG_IN,
    payload: data
  }
}

export function logoutAction() {
  return {
    type: LOG_OUT,
  }
}

export function loadUserAction(data) {
  return {
    type: LOAD_USER,
    payload: data
  }
}

export function loadingAction() {
  return {
    type: LOADING
  }
}

export function authErrorAction() {
  return {
    type: AUTH_ERROR
  }
}
