import axios, { AxiosResponse } from 'axios';
import { IPhoto } from '../models/photo';
import { request } from 'http';

/*
agent.ts

This script utilizes the package "Axios" to perform HTTP requests from our API. It's able to make CRUD requests to our API.
The service that should be primarily used in this script is the "Photos" service. This Photos service allows to perform all
necessary API requests for our application.

Later, if we chose to include a user repo/auth repo, we should add them here in their own respective object. These objects should make use of
the request methods laid out in the 'requests' object.
*/

axios.defaults.baseURL = 'http://localhost:8080/api';

const responseBody = (res: AxiosResponse) => res.data; // Extract data from our HTTP response for use in our application

const requests = {
    get: (url: string) => axios.get(url).then(responseBody), // Make the HTTP request => wait for response => 'then' return the response data
    post: (url: string, body: {}) => axios.post(url).then(responseBody),
    delete: (url: string) => axios.get(url).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody)
}

const Photos = {
    fetchAll: (): Promise<IPhoto[]> => requests.get('/gallery'),
    fetchOne: (id: string): Promise<IPhoto> => requests.get(`/gallery/${id}`),
    create: (photo: IPhoto) => requests.post('/upload', photo),
    update: (photo: IPhoto) => requests.put(`/gallery/${photo.id}`, photo),
    delete: (id: string) => requests.delete(`/gallery/${id}`)
}

export default {
    Photos
}