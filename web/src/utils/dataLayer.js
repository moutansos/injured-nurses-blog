import axios from 'axios';

const defaultBaseUrl = 'https://injured-nurses-blog.azurewebsites.net/api';
//const defaultBaseUrl = 'http://localhost:7071/api';

const authKeys = 'code=LJxfRsEI3tiNpzKljaXcY1KhxV4nBWEeEhR1mdWiepdVOLtigGERZw==&clientId=Sanity';

export class DataLayer {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async addSubscription(subscriber) {
        await axios.post(`${this.baseUrl}/AddSubscription?${authKeys}`, subscriber);
    }

    async removeSubscription(subscriberEmail) {
        await axios.delete(`${this.baseUrl}/RemoveSubscription?email=${subscriberEmail}&${authKeys}`);
    }
}

export const dataLayer = new DataLayer(defaultBaseUrl);