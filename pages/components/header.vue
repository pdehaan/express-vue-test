<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: "SiteHeader",
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    data() {
      return {};
    }
  };
</script>
