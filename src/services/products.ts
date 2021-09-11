import axios from "axios";

const url = "https://coding-challenge-api.aerolab.co/products"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4M2E0OWYxYzA1YTAwMWE5YmUyNzkiLCJpYXQiOjE2MzEwNzQ4ODl9.rWn5BlnvNFgTJxaZs4ApttJe9z9ejphgYzUGc6qw3HQ" 

const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization': token
}

export const getProduts = axios.get(url, {headers});

export const claimProduts = (id: string) => {
    try{
        return axios.post("https://coding-challenge-api.aerolab.co/redeem", {productId: id}, {headers})
    }
    catch (err){
        console.log(err)
    }
}