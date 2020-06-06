<template>
  <Layout :show-logo="true">
    <Card>
      <h1>Subscribe</h1>
      <p>Subscribe to be notified via email when new posts come out!</p>
      <form action="javascript:void(0)">
        <label class="input-label" for="name-input">Name:</label>
        <input id="name-input" v-model="name" type="text" placeholder="My Name" />
        <br />
        <label class="input-label" for="email-input">Email:</label>
        <input id="email-input" v-model="email" type="text" placeholder="example@hello.com" />
        <br />
        <button :disabled="!validInput" @click.prevent="subscribe">Subscribe</button>
      </form>
      <div v-if="state == 'loaded' || state == 'error'">
        <p>{{ statusMessage }}</p>
      </div>
      <div v-else-if="state == 'loading'">
        Subscribing. Please wait...
      </div>
    </Card>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';
import axios from 'axios';
import emailValidator from 'email-validator';
import { dataLayer } from '~/utils/dataLayer';

export default {
  data: () => ({
    email: null,
    name: null,
    statusMessage: '',
    state: 'initial'
  }),
  components: {
    Card
  },
  methods: {
    async subscribe() {
      this.state = 'loading';

      const newSubscriber = {
        name: this.name,
        email: this.email
      };

      try {
        await dataLayer.addSubscription(newSubscriber);
      } catch (err) {
        this.statusMessage = 'Unable to subscribe. Reload and try again';
        throw err;
      }

      this.state = 'loaded';
      this.statusMessage = 'Sucessfully subscribed!';
    }
  },
  computed: {
    validInput() {
      return emailValidator.validate(this.email) && this.name && this.name.length <= 50;
    }
  }
};
</script>

<style scoped>
.input-label {
  margin-right: 3em;
}
</style>
