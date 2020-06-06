<template>
  <Layout :show-logo="true">
    <Card>
      <h1>Unsubscribe</h1>
      <p>Unsubscribe from notification emails for new posts</p>
      <button :disabled="!email" @click.prevent="unsubscribe">Yes please Unsubscribe me!</button>
      <div v-if="state == 'loading'">
        <p>Unsubscribing. Please Wait...</p>
      </div>
      <div v-else-if="state == 'loaded'">
        <p>Unsubscribed.</p>
      </div>
      <div v-else-if="state == 'error'">
        <p>An error occured while unsubscribing you. Please refresh the page and try again</p>
      </div>
    </Card>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';
import { dataLayer } from '~/utils/dataLayer';

export default {
  data: () => ({
    email: null,
    state: 'initial'
  }),
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.email = urlParams.get('email');
  },
  components: {
    Card
  },
  methods: {
      async unsubscribe() {
          this.state = 'loading';
          try {
              await dataLayer.removeSubscription(this.email);
          } catch (err) {
              this.state = 'error';
          }
          this.state = 'loaded';
      }
  }
};
</script>
