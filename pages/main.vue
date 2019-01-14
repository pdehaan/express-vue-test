<template>
  <div>
    <site-header :title="title" />

    <main>msg: {{ name }}</main>
    <a href="/?breach=aDoBe">Adobe breach</a><br />
    <a href="/breach/Linkedin">LinkedIn breach</a><br />
    <p>{{ banana }}</p>

    <site-footer />
  </div>
</template>

<script>
  import siteHeader from "./components/header.vue";
  import siteFooter from "./components/footer.vue";

  export default {
    components: {
      siteFooter,
      siteHeader
    },
    data() {
      return {};
    }
  };
</script>
