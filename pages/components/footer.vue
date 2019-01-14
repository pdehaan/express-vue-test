<template>
  <footer>
    <hr />
    <p v-html="copyright" />
  </footer>
</template>

<script>
  export default {
    name: "site-footer",
    computed: {
      copyright() {
        return `&copy; Mozilla Inc. ${ new Date().getFullYear() }`;
      }
    }
  };
</script>
