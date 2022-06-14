import axios from 'axios'

const baseURL = "https://api.hatchways.io/assessment/";
const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default class API {
     fetchItems = async(params) => {
        return api.get("/students", {params});
     };
}