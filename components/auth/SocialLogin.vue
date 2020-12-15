<template>
  <div class="text-center">
    <div>
      Pour ajouter un commentaire, connectez vous avec votre compte Google ou
      Facebook:
    </div>
    <div class="mt-3">
      <v-btn
        v-if="googleAuthEnabled"
        class="mx-1"
        large
        icon
        @click="login('google')"
      >
        <v-icon x-large>mdi-google</v-icon>
      </v-btn>
      <v-btn v-if="fbAuthEnabled" class="mx-1" large icon @click="login('fb')">
        <v-icon x-large>mdi-facebook</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import MixinHelpers from '@/components/mixins/MixinHelpers';

export default {
  name: 'SocialLogin',
  mixins: [MixinHelpers],
  methods: {
    login(provider) {
      this.$store.dispatch('user/login', provider);
    },
  },
};
</script>

<style scoped lang="scss"></style>
