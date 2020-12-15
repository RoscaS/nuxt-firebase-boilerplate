<template>
  <v-footer class="text-center" app fixed absolute>
    <v-row justify="center">
      <v-card flat color="transparent">
          <a class="brand-link" href="mailto:">P&S</a>
          {{ new Date().getFullYear() }}
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'SectionFooter',
};
</script>

<style lang="scss" scoped>
.brand-link {
  font-weight: bold !important;
  font-size: larger !important;
  text-decoration: none !important;
}
</style>
