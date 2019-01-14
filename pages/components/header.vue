<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: "site-header",
    props: {
      title: String
    },
    data() {
      return {};
    }
  };
</script>
