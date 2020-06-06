import axios from 'axios';

const defaultBaseUrl = 'http://localhost:7071/api';

export class DataLayer {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async addSubscription(subscriber) {
        await axios.post(`${this.baseUrl}/AddSubscription`, subscriber);
    }

    async removeSubscription(subscriberEmail) {
        await axios.delete(`${this.baseUrl}/RemoveSubscription?email=${subscriberEmail}`);
    }
}

export const dataLayer = new DataLayer(defaultBaseUrl);