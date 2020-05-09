import { create } from 'apisauce';

// let api;

const api = create({
    baseURL: 'https://us-central1-cookbook-f485f.cloudfunctions.net/api/v1/',
    headers: { 
        Accept: 'application/json', 
        'Content-Type': 'application/json',
    },
})

// Recipes
export const fetchRecipes = () => api.get('/recipes/');

export const loginUser = (username, email, password) => api.post('rest-auth/login/', {
    username,
    email,
    password
})

export const registerUser = (username, email, password1, password2) => api.post('rest-auth/registration/', {
    username,
    email,
    password1, 
    password2,
})

