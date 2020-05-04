import axios from 'axios';

export const axiosWithAuth = () => {
    // bring in the token
    const token = localStorage.getItem('token')

    // create an axios object. set headers. return.
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    })
}