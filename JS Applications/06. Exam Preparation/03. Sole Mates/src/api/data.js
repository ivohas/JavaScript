import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getShoes() {
  return await api.get(`http://localhost:3030/data/shoes?sortBy=_createdOn%20desc`);
}

export async function getShoesById(id) {
  return await api.get(`http://localhost:3030/data/shoes/${id}`);
}

export async function createShoes(shoe) {
  return await api.post(`http://localhost:3030/data/shoes`, shoe);
}

export async function editShoes(id, shoe) {
  return await api.put(`http://localhost:3030/data/shoes/${id}`, shoe);
}

export async function deleteShoes(id) {
  return await api.del(`http://localhost:3030/data/shoes/${id}`);
}

export async function getMyShoes() {
  const ownerId = sessionStorage.getItem('userId');
  return await api.get(`http://localhost:3030/data/shoes?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
}

export async function search(query) {
  return await api.get(`http://localhost:3030/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}

export async function getApplications(shoeId) {
  return await api.get(`http://localhost:3030/data/applications?where=shoeId%3D%22${shoeId}%22&distinct=_ownerId&count`)
}

export async function getApplicationById(shoeId, userId) {
  return await api.get(`http://localhost:3030/data/applications?where=shoeId%3D%22${shoeId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function postApplication(shoeId) {
  return await api.post(`http://localhost:3030/data/applications`, { shoeId: shoeId })
}