<template>
  <div>
    <p>{{ msg }}</p>
    <p>team : {{ teamFullName }}</p>
    <p>player : {{ ruiFirstName }} {{ ruiLastName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getPlayers } from "../api/api"

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const ruiFirstName = ref<string>('')
    const ruiLastName = ref<string>('')
    const teamFullName = ref<string>('')

    getPlayers(666609)
      .then(response => {
        ruiFirstName.value = response.first_name
        ruiLastName.value = response.last_name
        teamFullName.value = response.team.full_name
      })

    return {
      ruiFirstName,
      ruiLastName,
      teamFullName
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
