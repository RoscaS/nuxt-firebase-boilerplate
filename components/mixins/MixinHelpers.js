export default {
  name: 'MixinAuth',
  computed: {
    appName() {
      return process.env.appName
    },
    fbAuthEnabled() {
      return process.env.fbAuth || false
    },
    googleAuthEnabled() {
      return process.env.googleAuth || false;
    },
    loading() {
      return this.$store.state.user.loading;
    },
    user() {
      return this.$store.state.user.user;
    },
    isAdmin() {
      if (!process.client || !this.user) return
      const isFbAdmin = this.user.uid === process.env.adminFbUid || false;
      const isGoogleAdmin = this.user.uid === process.env.adminGoogleUid || false;
      return isGoogleAdmin || isFbAdmin;
    },
  },
};
