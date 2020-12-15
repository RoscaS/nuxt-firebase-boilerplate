<template>
  <v-container class="content-wrapper">
    <v-card outlined min-height="10vh">
      <slot></slot>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'SectionMainContent',
};
</script>

<style scoped lang="scss">
.content-wrapper {
}
</style>
