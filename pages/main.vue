<template>
  <site-wrapper :title="title">
    <div>msg: {{ name }}</div>
    <a href="/?breach=aDoBe">
      Adobe breach
    </a><br>
    <a href="/breach/Linkedin">
      LinkedIn breach
    </a><br>
    <p>{{ banana }}</p>
  </site-wrapper>
</template>

<script>
  import siteWrapper from "./components/site-wrapper.vue";

  export default {
    components: {
      siteWrapper
    },
    data() {
      return {};
    }
  };
</script>
