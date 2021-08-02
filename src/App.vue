<template>
  <div class="wrapper">
    <div class="container">
        <div class="main-controller" :class="{shiftToMenu: rightShift}">
            <Nav :titleHide="panelCloseBtn" @panelStatus="openPanel"/>
        </div>
        <div class="contents" v-if="!rightShift">    
            <router-view 
                :missionsToDO="missionsList"
                @newMission="addNewMission"
                @newProcessItem="changeCurrentItem"
                @missionChecked="getFinishedId"
                @missionUnChecked="getUnCheckMission" 
                :workRing="workRing"
                :breakRing="breakRing"
                @newWorkRing="changeWorkRing"
                @newBreakRing="changeBreakRing"
                />
        </div>
        <div class="menu-wrapper content-between">
            <Menu :btnActive="panelCloseBtn" @closeClick="closePanel"/>
        </div>
    </div>
    <Pomodoro 
        :pomodoroShow="panelCloseBtn" 
        @clickId="getFinishedId"
        :currentItemId="getCurrentId"
        :missionsToDo="toDoList"
        @newMission="addNewMission"
        @newProcessItem="changeCurrentItem"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nav from '@/components/Nav.vue';
import Pomodoro from '@/components/Pomodoro.vue';
import Menu from '@/components/Menu.vue';
import ToDoItem from '@/todoprop';

@Options({
    components: {
        Nav,
        Pomodoro,
        Menu,
    },
    data() {
        return{
            missionsList: [
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "the First thing to do today",
                    checkStatus: false,
                    timeUnit: 25,
                    processTimeUnits: 0
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "the second thing to do today",
                    checkStatus: false,
                    timeUnit: 25,
                    processTimeUnits: 0
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "the third thing to do today",
                    checkStatus: false,
                    timeUnit: 25,
                    processTimeUnits: 0
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "the Forth thing to do today",
                    checkStatus: false,
                    timeUnit: 25,
                    processTimeUnits: 0
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "complete the keynote",
                    checkStatus: false,
                    timeUnit: 25,
                    processTimeUnits: 0
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "prepare presentation",
                    checkStatus: false,
                    timeUnit: 25,
                    processTimeUnits: 0
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "mockup of the new case",
                    checkStatus: true,
                    timeUnit: 25,
                    processTimeUnits: 4
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "product prototype",
                    checkStatus: true,
                    timeUnit: 25,
                    processTimeUnits: 10
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "draw a wireframe",
                    checkStatus: true,
                    timeUnit: 25,
                    processTimeUnits: 7
                },
                {
                    id: Math.floor(new Date().valueOf() * Math.random()),
                    contents: "website detail refine",
                    checkStatus: true,
                    timeUnit: 25,
                    processTimeUnits: 5
                }
            ],
            workRing: 0,
            breakRing: 0,
            // currentId: 0
        }
    },
    computed:{
        toDoList(){
            return this.missionsList.filter((m: ToDoItem) => !m.checkStatus)
        }
    }
})

export default class App extends Vue {
    missionsList!: Array<ToDoItem>
    toDoList!: Array<ToDoItem>
    workRing!: number
    breakRing!: number
    panelCloseBtn = true
    currentId = 0
    rightShift = true

    private get getCurrentId(): number{
        if(this.currentId === 0)
            return this.toDoList[0].id
        return this.currentId
    }

    private set getCurrentId(newValue){
        this.currentId = newValue
    }

    getRandomId(): number{
        return Math.floor(new Date().valueOf() * Math.random())
    }

    addNewMission(value: ToDoItem){
        this.missionsList.push(value)
    }

    changeCurrentItem(value: number){
        this.currentId = value
    }

    getUnCheckMission(value:number): void{
        if(this.currentId === -1)
            this.currentId = value
    }

    getFinishedId(value: number): void{
        this.toDoList.forEach((m:ToDoItem)=>{
            if(m.id === value)
                m.checkStatus = !m.checkStatus
        })
        
        if(this.toDoList.length > 0)
            this.currentId = this.toDoList[0].id
        else
            this.currentId = -1
    }

    openPanel(value: boolean): void{
        this.panelCloseBtn = !value
        this.rightShift = false;
    }

    closePanel(value: boolean): void{
        this.panelCloseBtn = value
        this.rightShift = true;
    }

    changeWorkRing(value: number): void{
        this.workRing = value
    }

    changeBreakRing(value: number): void{
        this.breakRing = value
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

*::-webkit-scrollbar {
  display: none;
}

*:focus {
    outline: none;
}

button{
  background: none;
  border: none;
  padding: 0;
}

.workColor{
    color: #FF4384;
}

.breakColor{
    color: #00A7FF;
}

.workColor::placeholder{
    color: #FF4384;
}

.breakColor::placeholder{
    color: #00A7FF;
}

.workBgColor{
    background-color: #FF4384;
}

.breakBgColor{
    background-color: #00A7FF;
}

.processBgColor{
    background-color: #fff;
}

.workPanelBgColor{
    background-color: #FFEDF7;
}

.breakPanelBgColor{
    background-color: #E5F3FF;
}

.workBorder{
    border: 4px solid #FF4384;
}

.breakBorder{
    border: 4px solid #00A7FF;
}

.bgPrimaryColor{
    background-color: #003164;
}

.hideToRight{
    // position: absolute;
    transition: all 0.8s;
    transform: translateX(100%);
    opacity: 0;
    overflow: hidden;
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
