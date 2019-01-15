<template>
  <site-wrapper :title="title">
    <div v-if="breach">
      <img
        :src="breach.LogoPath"
        :alt="breach.Title"
        class="logo"
      >
      <p class="title">
        {{ breach.Title }}
      </p>
      <p>
        <span class="label">
          Breach Date:
        </span> {{ breach.BreachDate | dateFormat }}
      </p>
      <p>
        <span class="label">
          Added Date:
        </span> {{ breach.AddedDate | dateFormat }}
      </p>
      <p>
        <span class="label">
          Compromised Accounts:
        </span> {{ breach.PwnCount | numberFormat }}
      </p>
      <blockquote>
        <small v-html="breach.Description" />
      </blockquote>
    </div>
  </site-wrapper>
</template>

<script>
  import siteWrapper from "./components/site-wrapper.vue";
  import mixin from "../mixin";

  export default {
    mixins: [mixin],
    components: {
      siteWrapper
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
