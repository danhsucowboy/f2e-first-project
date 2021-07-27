<template>
  <div class="wrapper">
    <div class="container">
        <div class="main-controller" :class="{shiftToMenu: rightShift}">
            <!-- <Nav :missionsNav="missionsApp" :finishedNav="finishedApp"/> -->
            <Nav :titleHide="panelCloseBtn" @panelStatus="openPanel"/>
        </div>
        <div class="contents" :class="{hideToRight: rightShift}">
            <router-view @missionChecked="getFinishedId" @missionUnChecked="getUnFinishedId" :missionsToDO="missionsApp" :finishedToDO="finishedApp"/>
        </div>
        <div class="menu-wrapper content-between">
            <Menu :btnActive="panelCloseBtn" @closeClick="closePanel"/>
        </div>
    </div>
    <Pomodoro :pomodoroShow="panelCloseBtn" @missionChecked="getFinishedId" :missionsToDO="missionsApp"/>
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
    panelCloseBtn = false
    outputId = 0
    rightShift = false

    getFinishedId(value: number): void{
        this.finishedApp.push(this.missionsApp[value])
        this.missionsApp.splice(value, 1)
    }

    getUnFinishedId(value: number): void{
        this.missionsApp.push(this.finishedApp[value])
        this.finishedApp.splice(value, 1)
    }

    openPanel(value: boolean): void{
        this.panelCloseBtn = !value
        this.rightShift = false;
    }

    closePanel(value: boolean): void{
        this.panelCloseBtn = value
        this.rightShift = true;
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

.hideToRight{
    // position: absolute;
    transition: all 0.8s;
    transform: translateX(100%);
    opacity: 0;
    // grid-column-start: 12 !important;
    // grid-column-end: 13 !important;
}

.shiftToMenu{
    grid-column-start: 12 !important;
    grid-column-end: 13 !important;
}

.content-end{
    justify-content: flex-end;
}

.content-between{
    justify-content: space-between;
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
    // position: absolute;
    // left:0%;
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 1s;
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
    align-items: flex-end;
}
</style>
