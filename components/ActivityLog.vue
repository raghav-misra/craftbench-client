<template>

  <div>
      <section v-if="action.rawString">
          <p>{{action.rawString}}</p>
      </section>
      <section v-else>
      <span class="bg-blue-400 px-3">{{action.username}}</span> <span>Contributed {{action.contribute}}!</span>
      <p class="text-gray-300 italic">&nbsp; - And {{event.words.dealt}} {{action.damage}} {{event.words.damage}}</p>
      </section>
  </div>
</template>

<script>
export default {
    props:{
        event: Object,
        action:Object
    }
}
</script>

<style>

</style>