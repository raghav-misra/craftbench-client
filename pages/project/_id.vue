<template>
<div>
  <section class="text-white p-3 py-10">
      <h1 @click="triggerSwitch('editTitle')" class="bold text-4xl font-sans" v-if="!ui.editTitle">{{project.title}}</h1>
      <section v-else>
          <b-input v-model="project.title" @focusout.native="triggerSwitch('editTitle')" ref="editTitle"></b-input>
      </section>

  </section>
  <div class="grid grid-cols-5">
      <section class="h-screen has-background-info">
          <div class="container p-7 text-white">
              <br><br>
     
              <p @click="triggerSwitch('editDesc')" v-if="!ui.editDesc" class="max-h-100 overflow-y-scroll">{{project.desc}}</p>
                <section v-else>
                  <textarea class="bg-transparent" v-model="project.desc" @focusout="triggerSwitch('editDesc')" ref="editDesc"></textarea>
              </section>
          </div>
      </section>
      <section class="col-span-4 h-screen has-background-light">Hi</section>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            ui:{
                editTitle: false,
                editDesc:false
            },
            project:{
                title:"Play Forited",
                desc:"Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
        }
    },
    methods:{
        triggerSwitch(focus){
            this.ui[focus] = !this.ui[focus]

            if (this.ui[focus]) {
                this.$nextTick(() => {
                    this.$refs[focus].focus()
                })

            }
        }
    },
    computed: {
        id(){
            return this.route.params.id
        }
    }
}
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
 background: #f1f1f1; 
}
</style>