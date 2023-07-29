const axios = require('axios').default;
const API_KEY = '29596647-f7db787be5835d1b0c2ce2eda'
const API_URL = 'https://pixabay.com/api/'

export default class PixabayAPI {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 40;
    }
}