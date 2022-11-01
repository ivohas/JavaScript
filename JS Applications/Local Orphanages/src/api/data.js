import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all ads
export async function getAllPost() {
    return await api.get(host + '/data/posts?sortBy=_createdOn%20desc');
}

// get ad by id
export async function getPostById(id) {
    return await api.get(host + `/data/posts/${id}`);
}

// create ad
export async function createPost(listing) {
    return await api.post(host + '/data/posts', listing);
}

// edit ad by id
export async function editPostById(id, listing) {
    return await api.put(host + `/data/posts/${id}`, listing);
}

// delete ad by id
export async function deletePostById(id) {
    return await api.del(host + `/data/posts/${id}`)
}

// get my ads
export async function getMyPosts(userId) {
    return await api.get(host + `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function donationPost(listingId) {
    return await api.post(host + `/data/donations`, listingId);
}

export async function getTotalDonationCount(petId) {
    return await api.get(host + `/data/donations?where=postId%3D%22${petId}%22&distinct=_ownerId&count`);
}


export async function didUserDonation(listingId, userId){
    return await api.get(host + `/data/donations?where=postId%3D%22${listingId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    
}