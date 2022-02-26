import axios from 'axios';

export class Api {
    baseURL;
    axios;

    constructor() {
        this.baseURL = `https://pp-api-desafio.herokuapp.com/`;

        this.axios = axios.create({baseURL:this.baseURL});
    }
}

export default new Api();