<template>
  <div>
    <site-header :title="title" />
    <main id="content">
      <slot />
    </main>
    <site-footer />
  </div>
</template>

<script>
  import siteHeader from "./header.vue";
  import siteFooter from "./footer.vue";

  export default {
    components: {
      siteFooter,
      siteHeader
    },
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
