<template>
  <main>
    <site-header :title="title" />

    <div v-if="breach">
      <img :src="breach.LogoPath" :alt="breach.Title" class="logo" />
      <p class="title">{{ breach.Title }}</p>
      <p><span class="label">Breach Date:</span> {{ breach.BreachDate | dateFormat }}</p>
      <p><span class="label">Added Date:</span> {{ breach.AddedDate | dateFormat }}</p>
      <p><span class="label">Compromised Accounts:</span> {{ breach.PwnCount | numberFormat }}</p>
      <blockquote><small v-html="breach.Description" /></blockquote>
    </div>

    <site-footer />
  </main>
</template>

<script>
  import siteHeader from "./components/header.vue";
  import siteFooter from "./components/footer.vue";
  import mixin from "../mixin";

  export default {
    mixins: [mixin],
    components: {
      siteFooter,
      siteHeader
    },
    data() {
      return {};
    }
  };
</script>

<style>
.logo {
  max-width: 100px;
}
.title {
  font-size: 1.4em;
}
.label {
  font-weight: bold;
}
</style>
