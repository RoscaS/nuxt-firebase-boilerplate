<template>
  <v-app-bar
    color="white"
    clipped-right
    collapse
    app
  >
    <v-spacer v-if="!isAdmin"/>
    <v-btn x-large icon @click="socialDialog = true" :color="user ? 'green' : ''">
      <v-icon large>mdi-account</v-icon>
    </v-btn>
    <v-btn v-if="isAdmin" x-large icon @click="addDialog = true">
      <v-icon large>mdi-plus</v-icon>
    </v-btn>
    <v-spacer/>
  </v-app-bar>
</template>

<script>
  import MixinHelpers from '@/components/mixins/MixinHelpers'

  export default {
    name: 'SiteNavBar',
    mixins: [MixinHelpers],
    computed: {
      socialDialog: {
        get() {
          return this.$store.state.socialDialog;
        },
        set(value) {
          this.$store.dispatch('socialDialog', value);
        },
      },
      addDialog: {
        get() {
          return this.$store.state.addDialog;
        },
        set(value) {
          this.$store.dispatch('addDialog', value);
        },
      },
    }

  }
</script>

<style lang="scss" scoped>

</style>
