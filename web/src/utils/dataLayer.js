import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: error => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED';
  },
  shouldResetTimeout: true
});

const defaultBaseUrl = 'https://injured-nurses-blog.azurewebsites.net/api';
//const defaultBaseUrl = 'http://localhost:7071/api';

const authKeys = 'code=LJxfRsEI3tiNpzKljaXcY1KhxV4nBWEeEhR1mdWiepdVOLtigGERZw==&clientId=Sanity';

export class DataLayer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.axiosConfig = {
      timeout: 30000 //in milliseconds
    };
  }

  async addSubscription(subscriber) {
    await axios.post(`${this.baseUrl}/AddSubscription?${authKeys}`, subscriber, this.axiosConfig);
  }

  async removeSubscription(subscriberEmail) {
    await axios.delete(
      `${this.baseUrl}/RemoveSubscription?email=${subscriberEmail}&${authKeys}`,
      this.axiosConfig
    );
  }
}

export const dataLayer = new DataLayer(defaultBaseUrl);
