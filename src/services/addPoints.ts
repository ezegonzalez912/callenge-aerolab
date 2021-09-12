import axios from "axios"

const url = "https://coding-challenge-api.aerolab.co/user/points"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4M2E0OWYxYzA1YTAwMWE5YmUyNzkiLCJpYXQiOjE2MzEwNzQ4ODl9.rWn5BlnvNFgTJxaZs4ApttJe9z9ejphgYzUGc6qw3HQ" 

const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization': token
}

export const addPoints = (amount: number) => axios.post(url, {amount},{headers})