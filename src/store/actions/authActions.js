// /src/store/actions/authActions.js
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/login', { email, password });
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: err.response?.data?.message || 'Login failed',
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Vérifiez si le token est valide, par exemple en faisant une requête à votre backend
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { token }, // Remplacez par les données utilisateur appropriées
    });
  } else {
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
};
