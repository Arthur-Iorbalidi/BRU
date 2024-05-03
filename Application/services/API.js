class API {
    baseUrl = 'https://api.nasa.gov/planetary/apod';
    key = 'W7q8y2CYtQbgmMHbXwgRvs3wfmPbx4tH4cQfmOmX';

    async get(params) {
        let queryParams = '';
        for (const [key, value] of Object.entries(params)) {
            queryParams += `${key}=${value}&`;
        }
        const response = await fetch(`${this.baseUrl}?${queryParams}api_key=${this.key}`);
        const data = await response.json();
        return data;
    }
}

export default API;