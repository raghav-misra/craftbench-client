<template>
<div>
  <div class="grid grid-cols-5">
      <section class="h-screen col-span-2" :style="`background-image:url('${project.banner}')` ">
          <h1 @click="triggerSwitch('editTitle')" class="bold font-sans break-normal mx-4 text-white" v-if="!ui.editTitle"
              :style="`text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);font-size:3vw;`">{{project.title}}</h1>
          <section v-else>
              <input v-model="project.title" @focusout="triggerSwitch('editTitle')" ref="editTitle" class="seamless-input seamless-title"/>
          </section>
          <section class="absolute">
               <radial-progress-bar :diameter="175" :completed-steps="completed" :total-steps="total" startColor="#EDDDD4" stopColor="#EDDDD4">
                   <p class="text-white text-center" style="text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);">Project Completion!</p>
                  </radial-progress-bar>
          </section>
          <section class="opacity-40 hover:opacity-100 h-screen duration-200 bg-gray-500 hover:translate-y-0 transform translate-y-52 " >
              <div class="container p-7 text-white">
                  <b-button type="is-primary" @click="addTask()">Add Task</b-button>
                     <b-button type="is-success" class="animate-bounce">Save</b-button>
                  <br><br>
                  <p @click="triggerSwitch('editDesc')" v-if="!ui.editDesc" class="max-h-100 overflow-y-scroll break-normal ">{{project.desc}}</p>
                  <section v-else>
                      <textarea class="bg-transparent h-96" style="min-width: 35vw" v-model="project.desc" @focusout="triggerSwitch('editDesc')"
                          ref="editDesc"></textarea>
                  </section>
              </div>
          </section>
      </section>
      <section class="col-span-3 h-screen has-background-light overflow-y-scroll">
          <div v-if="project.tasks.filter(t =>t !== false).length == 0 " class="p-52">
              <img class="max-h-96 max-w-96" src="@/assets/images/no-tasks.svg"/>
              <br>
              <h1 class="italic bold text-gray-400 text-2xl text-center">You have no tasks, add some by clicking <br> "Add Task" on the left!</h1>
          </div>
          <div v-else class="mx-32">
             <div v-for="(task,i) in project.tasks" :key="`taskview-${i}`" class="group" >
                <template v-if="task">
                    <p class="del underline text-sm italic text-gray-400 cursor-pointer opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-y-0 transform translate-y-52 " @click="removeTask(i)">Remove Task</p>
                    <TaskView v-model="project.tasks[i]" :index="i"/>       
                </template>
             </div>  
          </div>
      </section>
  </div>
</div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    data(){
        return{
            globalIndex:0,
            ui:{
                editTitle: false,
                editDesc: false
            },
            project:{
                title:"Play Forited",
                tasks:[
                    {name:"Take Notes",subtasks:[
                        {name:"1 Page",completed:true},
                        {name:"2 Page",completed:false}

                    ]},
                     {name:"CHE Notes",subtasks:[
                        {name:"1 Page",completed:true},
                        {name:"2 Page",completed:false}

                    ]}
                ],
                banner: "https://images.unsplash.com/photo-1559595414-d23623536723?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
                desc:"Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
        }
    },
    components:{
        RadialProgressBar
    },
    methods:{
        requestGlobalIndex(){
            this.globalIndex++
            return this.globalIndex
        },
        addTask(){
            this.project.tasks.push({
                name:"Click me to edit!",
                subtasks:[]
            })
        },
        removeTask(i){
           //  this.project.tasks.splice(i,1)
           this.project.tasks[i] = false
           this.$forceUpdate()
        },
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
        id() {
                return this.route.params.id
            },
            finalTasks() {
                return this.project.tasks.filter(t => t !== false)
            },
            completed() {
                return this.project.tasks.map(e => e.subtasks).reduce((a, b) => a = a.concat(b), []).filter(e => e.completed).length
            },
            total() {
                return this.project.tasks.map(e => e.subtasks).reduce((a, b) => a = a.concat(b), []).length
            }
    }
}
</script>

<style>
input.seamless-input{
 background-color:transparent;
 outline: none;
 border-bottom: solid 2px;
}
input.seamless-title{
 font-size:3vw; 
 color:white;
 text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
</style>