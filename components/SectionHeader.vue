<template>
  <v-container>
    <v-row class="main-container" justify="center" align="center">
      <h1 class="text-h1">
        <span>Let's </span>
        <span class="orange--text">{{ appName }}</span>
      </h1>
    </v-row>
  </v-container>
</template>

<script>
import MixinHelpers from '~/components/mixins/MixinHelpers';

export default {
  name: 'SectionHeader',
  mixins: [MixinHelpers],
};
</script>

<style scoped lang="scss">
.main-container {
  height: 300px;
  width: 100%;
}
</style>
