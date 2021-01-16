<template>
  <div>
      {{eventType}}
  </div>
</template>

<script lang="ts">
export default {
    computed:{
        eventType(){
            return this.$route.params.type
        }
    }
}
</script>

<style>

</style>