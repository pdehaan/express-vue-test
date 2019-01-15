<template>
  <footer>
    <hr>
    <p v-html="copyright" />
  </footer>
</template>

<script>
  export default {
    name: "SiteFooter",
    computed: {
      copyright() {
        return `&copy; Mozilla Inc. ${ new Date().getFullYear() }`;
      }
    }
  };
</script>
