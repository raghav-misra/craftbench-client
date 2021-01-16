import Vue from "vue";

export interface IEvent{
    title: string
    desc:string
    cta:string
    contributions: {
        small:string[]
        med:string[]
        large:string[]
    }
}


const state = Vue.observable({
    currentEventName: "dragon",
    events:{
        dragon:{
          title:"Dragon's Terror",
          desc:"The lands of Nimrasea, a once peaceful land has become over run by dragons. Efforts to repel the invaders have been so far, pyrrhic at best. The dragons show no signs of slowing down, and have refused to come with an agreement. The empire has put together a task force with one mission: to research and develop more effective measures to keep OUR people safe! ",
          cta:"Join the Mission!",
          pending:"Pending Taskforce Missions",
          words:{
            dealt:"dealt",
            damage:"damage",
          },
          contributions:{
            small:['Dragon-Piercing Arrows'],
            med:['Hyperspeed Bows'],
            large:['Anti Dragon Magic'],
          }
        }
      } as Record<string,IEvent>
});

export default state;
