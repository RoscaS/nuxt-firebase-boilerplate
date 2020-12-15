<template>
  <v-dialog v-model="dialog" :width="width" persistent>
    <v-card min-width="300" :loading="loading" :disabled="loading">
      <div class="pa-5">
        <v-btn
          v-show="!loading"
          color="red"
          icon
          large
          @click="dialog = false"
          style="position: absolute; right: 5px; top: 5px"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <slot></slot>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'BaseDialog',
    props: {
      loading: { type: Boolean },
      dialogName: { type: String },
      width: { type: String, default: '400' },
    },
    computed: {
      dialog: {
        get() {
          return this.$store.state[this.dialogName];
        },
        set(value) {
          this.$store.dispatch(this.dialogName, value);
        },
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
