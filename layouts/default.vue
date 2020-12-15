<template>
  <v-app light class="overflow-hidden">
    <client-only>
      <!--needed for static websites-->
      <SiteNavBar />
    </client-only>

    <SectionHeader />
    <v-main>
      <SectionMainContent>
        <nuxt />
      </SectionMainContent>
    </v-main>
    <SectionFooter />

    <UserDialog />
  </v-app>
</template>

<script>
import MixinHelpers from '@/components/mixins/MixinHelpers';
import SectionFooter from '~/components/SectionFooter';
import SiteNavBar from '@/components/widgets/SiteNavBar';
import SectionHeader from '~/components/SectionHeader';
import SectionMainContent from '~/components/SectionMainContent';
import UserDialog from '~/components/auth/dialogs/UserDialog';

export default {
  components: {
    UserDialog,
    SectionMainContent,
    SectionHeader,
    SiteNavBar,
    SectionFooter,
  },
  mixins: [MixinHelpers],

  data() {
    return {};
  },
};
</script>
