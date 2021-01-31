<template>

  <BaseLayout url="/search">
    <template v-slot:header>
      <p>new header</p>
    </template>

    <template v-slot:default="slotProps">
      {{ slotProps }}
    </template>

    <template v-slot:footer>
      <p>new footer !!</p>
    </template>
  </BaseLayout>

  <NavigationLink url="/search">
    <template v-slot:default>
      Your Profile
    </template>

  </NavigationLink>

  <hr>

  <ScopeSlot>
    <template v-slot:default="slotProps">
      <p>{{ slotProps.user.firstName }}</p>
    </template>
  </ScopeSlot>


  <!-- <BaseLayout>

    <template v-slot:default>
      <p>new body !!</p>
    </template>

  </BaseLayout>

  <BaseLayout>
    <template>
      {{ msg }}
    </template>
  </BaseLayout>

  <BaseLayout>
    <template v-slot:header="{ msg }">
      {{ msg }}
    </template>
  </BaseLayout> -->


  <!-- <base-layout>
    <template slot="header">
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template slot="footer">
      <p>Here's some contact info</p>
    </template>
  </base-layout> -->

  <!-- <BaseLayout>
    <template slot-scope="slotProps">
      {{ slotProps.msg }}
    </template>
  </BaseLayout> -->

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BaseLayout from '@/sandbox/slot/BaseLayout.vue'
import NavigationLink from '@/sandbox/slot/NavigationLink.vue'
import ScopeSlot from '@/sandbox/slot/ScopeSlot.vue'

export default defineComponent({
  components: {
    BaseLayout,
    NavigationLink,
    ScopeSlot
  },
  data () {
    return {
      msg: 'new msg !!'
    }
  }
})
</script>
