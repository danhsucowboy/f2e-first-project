<template>
  <div class="wrapper">
    <div class="container">
        <div class="main-controller">
            <!-- <Nav :missionsNav="missionsApp" :finishedNav="finishedApp"/> -->
            <Nav/>
            <Pomodoro/>
        </div>
        <div class="contents">
            <router-view @missionChecked="getFinishedId" @missionUnChecked="getUnFinishedId" :missionsToDO="missionsApp" :finishedToDO="finishedApp"/>
        </div>
        <div class="menu-wrapper">
            <Menu/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nav from '@/components/Nav.vue';
import Pomodoro from '@/components/Pomodoro.vue';
import Menu from '@/components/Menu.vue';
// import ToDoList from '@/views/ToDoList.vue';

@Options({
    components: {
        Nav,
        Pomodoro,
        Menu,
    },
    data() {
        return{
            missionsApp: ["the First thing to do today", "the second thing to do today", "complete the keynote", "prepare presentation"],
            finishedApp: []
        }
    },
})

export default class App extends Vue {
    missionsApp!: Array<string>
    finishedApp!: Array<string>
    outputId = 0

    getFinishedId(value: number){
        this.finishedApp.push(this.missionsApp[value])
        this.missionsApp.splice(value, 1)
    }

    getUnFinishedId(value: number){
        this.missionsApp.push(this.finishedApp[value])
        this.finishedApp.splice(value, 1)
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  // overflow: hidden;
}

*:focus {
    outline: none;
}

button{
  background: none;
  border: none;
  padding: 0;
}

.wrapper{
    width: 100%;
    height: 62.5vw;
    background-color: #003164;
    position: relative;
}

.wrapper .container{
    margin-left: 6.64vw;
    margin-right: 6.64vw;
    /* width: 100%; */
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr) ;
    column-width: 5vw;
    column-gap: 2.34vw;
}

.wrapper .container .main-controller{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.wrapper .container .contents{
    grid-column-start: 6;
    grid-column-end: 11;
}

.wrapper .container .menu-wrapper{
    width: 100%;
    height: 100%;
    grid-column-start: 12;
    grid-column-end: 13;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
</style>
