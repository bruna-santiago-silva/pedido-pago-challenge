import axios from 'axios';

export class Api {
    baseURL;
    axios;

    constructor() {
        this.baseURL = `https://bbbff4e5-200b-406b-9650-e44c68439220.mock.pstmn.io/`;

        this.axios = axios.create({baseURL:this.baseURL});
    }
}

export default new Api();