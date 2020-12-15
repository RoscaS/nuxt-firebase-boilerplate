<template>
  <BaseDialog :loading="loading" dialog-name="socialDialog">
    <v-card-title>
      <v-list v-if="user">
        <v-list-item>
          <v-badge
            :color="isGoogleProvider ? 'red' : 'blue'"
            offset-x="27"
            offset-y="20"
            overlap
            bordered
          >
            <template v-slot:badge>
              <v-icon v-if="isGoogleProvider">mdi-google</v-icon>
              <v-icon v-else>mdi-facebook</v-icon>
            </template>

            <v-list-item-avatar v-if="user.avatar || user.photoURL">
              <v-img :src="user.avatar || user.photoURL" />
            </v-list-item-avatar>
            <v-list-item-icon v-else>
              <v-icon color="green" x-large>mdi-account-circle</v-icon>
            </v-list-item-icon>
          </v-badge>

          <v-list-item-content>
            <v-list-item-title class="d-flex align-center">
              <span class="mr-2">{{ user.displayName }}</span>
              <v-icon v-if="isAdmin" color="#FFD700">mdi-crown</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div v-else class="text-center" style="width: 100%">
        <span>Login</span>
      </div>

    </v-card-title>

    <v-card-text v-if="!user">
      <SocialLogin />
    </v-card-text>
    <v-card-actions v-else>
      <v-btn v-if="user" @click="logout" block outlined>Logout</v-btn>
    </v-card-actions>
  </BaseDialog>
</template>

<script>
import MixinHelpers from '@/components/mixins/MixinHelpers';
import SocialLogin from '@/components/auth/SocialLogin';
import BaseDialog from '@/components/bases/BaseDialog';

export default {
  name: 'UserDialog',
  components: { BaseDialog, SocialLogin },
  mixins: [MixinHelpers],
  computed: {
    isGoogleProvider() {
      return this.$store.state.user.provider.includes('google');
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
    },
  },
};
</script>

<style scoped lang="scss"></style>
