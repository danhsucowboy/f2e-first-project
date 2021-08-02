<template>
  <div :class="{mainPanelOpen: pomodoroShow}" class="pomodoro">
    <div v-if="pomodoroShow" class="isolated count-ui"
        :class="{
            workBorder: workingStatus,
            breakBorder: !workingStatus}">
        <section class="process-wrapper" :style="cssVars" :data-anim="setWrapperAnim">
            <section class="left circle" 
            :class="{
                workBgColor: workingStatus,
                breakBgColor: !workingStatus}"
            :data-anim="setLeftCircleAnim"></section>
            <section class="right circle"  
            :class="{
                workBgColor: workingStatus,
                breakBgColor: !workingStatus}"
            :data-anim="setRightCircleAnim"></section>
        </section>
        <div class="process-circle" 
            :class="processBarColor">
            <button class="iconCircle" 
                :class="iconColor" 
                @click="processPlay"></button>
            <button class="stop-circle" 
                :class="stopIconColor"
                @click="processStop(true)"></button>
        </div>
    </div>
    <div class="interface">
      <div v-if="!pomodoroShow" class="bgPrimaryColor count-ui">
        <div class="process-circle">
          <button class="side iconCircle" 
            :class="iconColor"
            @click="processPlay"></button>
          <div class="bg"></div>
        </div>
      </div>
      <Orologio v-if="!pomodoroShow" :timerProp="orologioProp"/>
      <div v-if="!pomodoroShow" class="mission">{{missionsToDo.length > 0 ? getMission.contents : 'Clear'}}</div>
    </div>
    <div :class="{bgOpen: pomodoroShow, workPanelBgColor: workingStatus, breakPanelBgColor: !workingStatus}" class="bg">
        <div v-if="pomodoroShow" class="contents">
            <AddMissionBar @add="addNewMission" :status="workingStatus"/>
            <div class="currentItem">
                <div class="showMission" v-if="missionsToDo.length > 0">
                    <button class="missionBtn"  @click="currentItemChecked"></button>
                    <div class="itemProcess">
                        <div class="missionTitle">{{getMission.contents}}</div>
                        <div class="processBoard">
                            <div class="doneCircle" v-for="circle in getMission.processTimeUnits" :key="circle"></div>
                            <div class="smallCircle" v-if="workingStatus">
                                <section class="process-wrapper" :style="cssVars" :data-anim="setWrapperAnim">
                                    <section class="workBgColor left circle" 
                                    :data-anim="setLeftCircleAnim"></section>
                                    <section class="workBgColor right circle"
                                    :data-anim="setRightCircleAnim"></section>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <Orologio :timerProp="orologioProp"/>
            </div>
            <div class="listContents" :class="{allMission: displayAll}">
                <MissionItem v-for="(mission, index) in toDoSource" :key="index" 
                    :itemProps="{
                        panelOpen:false, 
                        folderTitle:'', 
                        item:mission, 
                        currentId:currentItemId}" 
                    @newProcessItem="checkCurrentItem"/>
                <button class="more" 
                    :class="{
                        workColor: workingStatus,
                        breakColor: !workingStatus}"
                    v-if="missionsToDo.length > 4 && !displayAll"
                    @click="displayAll = true"
                    >more</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Orologio from '@/components/Orologio.vue';
import AddMissionBar from '@/components/AddMissionBar.vue';
import MissionItem from '@/components/MissionItem.vue';
import ToDoItem from "@/todoprop";
import Timer from "@/timer";

@Options({
    components: {
        Orologio,
        AddMissionBar,
        MissionItem,
    },
    props: {
        pomodoroShow: Boolean,
        currentItemId: Number,
        missionsToDo: {
            type: Array,
            default: []
        },
    },
    emits: {
        newMission: String,
        missionChecked: Number,
        clickId: Number,
        newProcessItem: Number
    },
    computed:{
        toDoSource(){
            if(this.displayAll)
                return this.missionsToDo.filter((m: ToDoItem) => m.id !== this.currentItemId)
            else
                return this.missionsToDo.filter((m: ToDoItem, index: number) => m.id !== this.currentItemId && index < 4)
        },
        getMission(){
            return this.missionsToDo.filter((m: ToDoItem) => !m.checkStatus && m.id === this.currentItemId)[0]
        },
    },
    data(){
        return{
            delayTime: 0,
            rightDuration: 0,
            leftDuration: 0,
            oneMinute: 59,
            // oneMinute: 8,
            workingStatus: true
            // counting: this.getMission.timeUnit
        }
    }
    
})

export default class Pomodoro extends Vue {
    clickId!: number
    pomodoroShow!: boolean
    newMission!: ToDoItem
    missionChecked!: number
    missionsToDo!: Array<ToDoItem>
    currentItemId!: number
    newProcessItem!: number
    getMission!: ToDoItem
    missionStatus = 'uncheck'
    displayAll = false
    processMode = 0 //0: stop, 1: play, 2: pause
    wrapperAnim = ''
    leftCircleAnim = ''
    rightCircleAnim = ''
    delayTime!: number
    rightDuration!: number
    leftDuration!: number
    oneMinute!: number
    secTimer = {
        timerId: 0,
        start: 0,
        remaining: 1000
    }
    minTimer = {
        timerId: 0,
        start: 0,
        remaining: 60000
        // remaining: 8000
    }
    processingTime = 0
    workingStatus!: boolean
    breakUnit = 5


    get orologioProp(){
        return {
            status: this.workingStatus,
            currentId: this.currentItemId,
            mode: this.processMode,
            timeUnit: this.getMission.timeUnit,
            processMin: this.processingTime,
            processSec: this.oneMinute
        }
    }

    get setWrapperAnim(): string{
        return this.wrapperAnim 
    }

    set setWrapperAnim(newValue: string){
        this.wrapperAnim = newValue
    }

    get setLeftCircleAnim(): string{
        return this.leftCircleAnim 
    }

    set setLeftCircleAnim(newValue: string){
        this.leftCircleAnim = newValue
    }

    get setRightCircleAnim(): string{
        return this.rightCircleAnim 
    }

    set setRightCircleAnim(newValue: string){
        this.rightCircleAnim = newValue
    }

    get cssVars(): any{
        if(this.processMode === 1 || this.processMode === 2)
            return {
                '--anime-wrapper-name': 'close-wrapper',
                '--anime-right-name': 'right-spin',
                '--anime-left-name': 'left-spin',
                '--delay-time': this.delayTime+'s',
                '--right-during': this.rightDuration+'s',
                '--left-during': this.leftDuration+'s'
            }
        else{
            return {
                '--anime-wrapper-name': 'none',
                '--anime-right-name': 'none',
                '--anime-left-name': 'none'
                // '--delay-time': this.delayTime+'s',
                // '--right-during': this.rightDuration+'s',
                // '--left-during': this.leftDuration+'s'
            }
        }

    }

    get processBarColor(): string{
        switch(this.processMode){
            case 0:
            case 2:
                if(this.workingStatus)
                    return 'workBgColor workBorder'
                return 'breakBgColor breakBorder'
            case 1:
                if(this.workingStatus)
                    return 'processBgColor workBorder'
                return 'processBgColor breakBorder'
            default:
                return ''
        }
    }

    get iconColor(): string {
        switch(this.processMode){
            case 0:
            case 2:
                if(this.pomodoroShow)
                    return 'play'
                else
                    return 'workBgColor smallPlay'
            case 1:
                if(this.workingStatus)
                    return 'workBgColor pause'
                return 'breakBgColor pause'
            default:
                return ''
        }
    }

    get stopIconColor(): string{
        switch(this.processMode){
            case 0:
            case 2:
                return 'processBgColor'
            case 1:
                if(this.workingStatus)
                    return 'workBgColor'
                return 'breakBgColor'
            default:
                return ''
        }
    }

    addNewMission(value: string){
        let inputMission:ToDoItem = {
            id: Math.floor(new Date().valueOf() * Math.random()),
            contents: value,
            checkStatus: false,
            timeUnit: 25,
            processTimeUnits: 0
        }
        this.$emit('newMission', inputMission)
    }

    getCheckedId(value: number){
        // this.outputId = value
        this.$emit('missionChecked', value)
    }

    checkCurrentItem(value: number){
        this.$emit('newProcessItem', value)
    }

    currentItemChecked(){
        this.$emit('clickId', this.currentItemId)
    }
    // async modeChange(){
    //     const breakStart =() => {
    //         this.start(this.breakUnit)
    //         this.processMode = 1
    //         this.setWrapperAnim = 'base wrapper'
    //         this.setLeftCircleAnim = 'base left'
    //         this.setRightCircleAnim = 'base right'
    //     }

    //     this.processStop()
    //     this.workingStatus = !this.workingStatus
    //     if(!this.workingStatus){
    //         breakStart()
    //     }
    // }

    countDownMinute(inputSetting = 0){
        let delay:number = inputSetting === 0 ? 60000 : inputSetting
        if(this.processingTime >= 0){
            // console.log(this.workingStatus ? 'Working' : 'Break')
            this.minTimer.start = Date.now()
            clearTimeout(this.minTimer.timerId)
            this.minTimer.timerId = setTimeout(() => {
                this.processingTime-= 1
                this.oneMinute = 59
                this.countDownMinute()
                this.countDownSecond()
            }, delay)
        }
        else{
            // console.log('check: ', this.getMission.processTimeUnits)
            this.processStop()
            this.workingStatus = !this.workingStatus
            if(!this.workingStatus){
                this.getMission.processTimeUnits++
                setTimeout(()=>{
                    this.start(this.breakUnit)
                    this.processMode = 1
                    this.setWrapperAnim = 'base wrapper'
                    this.setLeftCircleAnim = 'base left'
                    this.setRightCircleAnim = 'base right'
                }, 100)
            }
            else{
                setTimeout(()=>{
                    this.start(this.getMission.timeUnit)
                    this.processMode = 1
                    this.setWrapperAnim = 'base wrapper'
                    this.setLeftCircleAnim = 'base left'
                    this.setRightCircleAnim = 'base right'
                }, 100)
            }
        }
    }

    countDownSecond(inputSetting = 0){
        let delay:number = inputSetting === 0 ? 1000 : inputSetting
        if(this.oneMinute >= 1){
            this.secTimer.start = Date.now()
            clearTimeout(this.secTimer.timerId)
            this.secTimer.timerId = setTimeout(() => {
                this.oneMinute -=1
                this.countDownSecond()
            }, delay)
        }
    }

    start(inputSetting: number): void{
        this.processingTime = inputSetting
        let processSec: number = this.processingTime*60
        // let processSec = 8
        this.delayTime = processSec/2
        this.rightDuration = processSec/2
        this.leftDuration = processSec
        this.processingTime-= 1
        this.countDownMinute()
        this.countDownSecond()
    }

    pause():void{
        clearTimeout(this.minTimer.timerId)
        clearTimeout(this.secTimer.timerId)
        this.minTimer.remaining -= Date.now() - this.minTimer.start
        this.secTimer.remaining -= Date.now() - this.secTimer.start
    }

    resume():void{
        this.countDownMinute(this.minTimer.remaining)
        this.countDownSecond(this.secTimer.remaining)
    }

    processPlay(): void{
        switch(this.processMode){
            case 0:{
                this.start(this.getMission.timeUnit)
                this.processMode = 1
                this.setWrapperAnim = 'base wrapper'
                this.setLeftCircleAnim = 'base left'
                this.setRightCircleAnim = 'base right'
                break
            }
            case 1:
                this.pause()
                this.processMode = 2
                this.setWrapperAnim = 'base wrapper pause'
                this.setLeftCircleAnim = 'base left pause'
                this.setRightCircleAnim = 'base right pause'
                break
            case 2:
                this.resume()
                this.processMode = 1
                this.setWrapperAnim = 'base wrapper'
                this.setLeftCircleAnim = 'base left'
                this.setRightCircleAnim = 'base right'
                break
        }
        
    }

    processStop(status = false): void{
        if(status){
            this.workingStatus = true
        }
        clearTimeout(this.minTimer.timerId)
        clearTimeout(this.secTimer.timerId)
        this.minTimer.remaining = 60000
        this.secTimer.remaining = 1000
        this.processMode = 0
        this.setWrapperAnim = ''
        this.setLeftCircleAnim = ''
        this.setRightCircleAnim = ''
        this.processingTime = 0
        this.oneMinute = 59
    }

}
</script>

<style>
.isolated{
    position: absolute;
    top: 10.1563vw;
    left: 43.5vw;
    width: 42.1875vw;
    height: 42.1875vw;
    border-radius: 50%;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .isolated{
        position: relative;
    }

        .isolated .process-wrapper{
            position: absolute;
            top: -.156vw;
            left: -.3vw;
            /* top: 0vw;
            left: 0vw; */
            width: 42.8125vw;
            height: 42.8125vw;
            border-radius: 50%;
            border-color: none;
            clip: rect(0vw, 42.8125vw, 42.8125vw, calc(42.8125vw/2));
            z-index: -1;
        }

        .isolated .process-wrapper .left{
            left: .13vw;
        }
        .isolated .process-wrapper .right{
            left: .13vw;
        }

        .isolated .process-wrapper .circle{
            position: absolute;
            top: 0vw;
            width: 42.4vw;
            height: 42.4vw;
            border-radius: 50%;
            clip: rect(0vw, calc(42.4vw/2), 42.4vw, 0vw);
        }

        .isolated section[data-anim~=restart]{
            animation-direction: reverse
        }

        .isolated section[data-anim~=pause]{
            animation-play-state: paused;
        }

        .isolated section[data-anim~=base] {
            -webkit-animation-iteration-count: 1;  /* Only run once */
            -webkit-animation-fill-mode: forwards; 
            /* Hold the last keyframe */
            -webkit-animation-timing-function:linear; /* Linear animation */
        }

        .process-wrapper[data-anim~=wrapper] {
            -webkit-animation-duration: 0.01s; /* Complete keyframes asap */
            -webkit-animation-delay: var(--delay-time); /* Wait half of the animation */
            -webkit-animation-name: var(--anime-wrapper-name); /* Keyframes name */
        }

        .circle[data-anim~=left] {
            -webkit-animation-duration: var(--left-during); /* Full animation time */
            -webkit-animation-name: var(--anime-left-name);
        }

        .circle[data-anim~=right] {
            -webkit-animation-duration: var(--right-during); /* Half animation time */
            -webkit-animation-name: var(--anime-right-name);
        }
        /* Rotate the right side of the progress bar from 0 to 180 degrees */
@-webkit-keyframes right-spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(180deg);
    }
}
/* Rotate the left side of the progress bar from 0 to 360 degrees */
@-webkit-keyframes left-spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
/* Set the wrapper clip to auto, effectively removing the clip */
@-webkit-keyframes close-wrapper {
    to {
        clip: rect(auto, auto, auto, auto);
    }
}

    .isolated .process-circle{
        width: 39.6875vw;
        height: 39.6875vw;
        /* border: 4px solid #FF4384; */
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .isolated .process-circle .iconCircle{
            margin-left: 0.9375vw;
            width: 7.5vw;
            height: 7.5vw;
            transition: .5s;
            cursor: pointer;
        }

        .isolated .process-circle .iconCircle:hover{
            width: 10vw;
            height: 10vw;
        }

        .isolated .process-circle .stop-circle{
            margin-top: 5.5vw;
            width: 1.875vw;
            height: 1.875vw;
            mask: url('../assets/stop_black_48dp.svg') no-repeat center;
            padding:0;
            border:none;
            mask-size: 115% 115%;
            transition: .5s;
            cursor: pointer;
        }

        .isolated .process-circle .stop-circle:hover{
            width: 2.3vw;
            height: 2.3vw;
        }

.mainPanelOpen{
    width: 64.84375vw !important; 
    height: 100% !important;
    top: 0% !important;
    left: 0% !important;
    overflow:visible !important;
}

.pomodoro{
    width: 27.34vw;
    height: 18.2vw;
    position: absolute;
    top: 44.3vw;
    left: 6.64vw;
    overflow:hidden;
    transition: 1s;
}

.pomodoro .interface{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
}

.pomodoro .interface .count-ui{
    width: 9vw;
    height: 9vw;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .interface .count-ui .process-circle{
        position: relative;
        width: 8.125vw;
        height: 8.125vw;
        border: 2px solid #FF4384;
        border-radius: 50%;
        transition: .5s;
    }

.pomodoro .interface .mission{
    height: 1.5vw;
    text-align: left;
    letter-spacing: 0px;
    color: #003164;
    font: normal normal bold 1.25vw/1.5vw 'Open Sans', sans-serif;
    text-transform: uppercase;
}

.count-ui .process-circle .side{
    position: absolute;
    top: 0.3125vw;
    left: 0.3125vw;
    z-index: 10;
    width: 7.5vw;
    height: 7.5vw;
    background-color: #FF4384;
}

.count-ui .process-circle .play{
    mask: url('../assets/play_circle_filled_black_48dp.svg') no-repeat center;
    padding:0;
    border:none;
    mask-size: 115% 115%;
    background-color: #fff;
}

.count-ui .process-circle .smallPlay{
    mask: url('../assets/play_circle_filled_black_48dp.svg') no-repeat center;
    padding:0;
    border:none;
    mask-size: 115% 115%;
    /* background-color: #fff; */
}

.count-ui .process-circle .pause{
    mask: url('../assets/pause_circle_filled_black_48dp.svg') no-repeat center;
    padding:0;
    border:none;
    mask-size: 115% 115%;
    /* background-color: #FF4384; */
}

.count-ui .process-circle .bg{
    position: absolute;
    top:1.4vw;
    left:1.4vw;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    width: 5.3125vw;
    height: 5.3125vw;
    z-index: 0;
}

.pomodoro .bg{
    position: absolute;
    top:4.53vw;
    left:0%;
    width: 27.34vw;
    height: 27.34vw;
    border-radius: 50%;
    z-index: 0;
    transition: 1s;
}
    .pomodoro .bg .contents{
        margin-left: 6.64vw;
        width: 34.77vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .contents .currentItem{
        margin-top: 3vw;
        display: flex;
        flex-direction: column;    
    }
    
        .contents .currentItem .showMission{
            width: 100%;
            /* height: 3.75vw; */
            text-align: left;
            display: flex;
            flex-direction: row;
        }

            .currentItem .showMission .missionBtn{
                width: 3.75vw;
                height: 3.75vw;
                border: 2px solid #003164;
                border-radius: 50%;
                cursor: pointer;
            }

            .currentItem .showMission .itemProcess{
                margin-left: 1.25vw;
                display: flex;
                flex-direction: column;
            }
            
                .showMission .itemProcess .missionTitle{
                    font: normal normal bold 1.875vw/2.1875vw 'Open Sans', sans-serif;
                    letter-spacing: 0px;
                    color: #003164;
                    text-transform: uppercase;
                    margin-bottom: 0.625vw;
                }

                .showMission .itemProcess .processBoard{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }

                    .itemProcess .processBoard .doneCircle{
                        width: 0.9375vw;
                        height: 0.9375vw;
                        background-color: #003164;
                        border: 1px solid #003164;
                        border-radius: 50%;
                        margin-right: 0.625vw;
                    }

                    .itemProcess .processBoard .smallCircle{
                        width: 0.9375vw;
                        height: 0.9375vw;
                        border: 1px solid #FF4384;
                        border-radius: 50%;
                        position: relative;
                    }

                         .smallCircle .process-wrapper{
                            position: absolute;
                            top: 0vw;
                            left: 0vw;
                            width: 0.9375vw;
                            height: 0.9375vw;
                            border-radius: 50%;
                            border-color: none;
                            clip: rect(0vw, 0.9375vw, 0.9375vw, calc(0.9375vw/2));
                            z-index: -1;
                        }

                        .smallCircle .process-wrapper .left{
                            left: 0vw;
                        }
                        .smallCircle .process-wrapper .right{
                            left: 0vw;
                        }

                        .smallCircle .process-wrapper .circle{
                            position: absolute;
                            top: 0vw;
                            width: 0.9375vw;
                            height: 0.9375vw;
                            border-radius: 50%;
                            /* border: 1px solid #FF4384; */
                            clip: rect(0vw, 0.469vw, 0.9375vw, 0vw);
                        }

                        .smallCircle section[data-anim~=restart]{
                            animation-direction: reverse
                        }

                        .smallCircle section[data-anim~=pause]{
                            animation-play-state: paused;
                        }

                        .smallCircle section[data-anim~=base] {
                            -webkit-animation-iteration-count: 1;  /* Only run once */
                            -webkit-animation-fill-mode: forwards; 
                            /* Hold the last keyframe */
                            -webkit-animation-timing-function:linear; /* Linear animation */
                        }

        .contents .currentItem .timer{
            width: 100%;
            height: 16.1vw;
            text-align: center;
            font: normal normal bold 13.75vw/13.75vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            /* color: #FF4384; */
            z-index: -1;
        }

        /* .contents .currentItem .timer::selection{
            height: 13.75vw;
        } */

    .bgOpen .contents .listContents{
        height: 11.09375vw;
        margin-bottom: 3.75vw;
        display: flex;
        flex-direction: column;

    }

    .contents .allMission{
        overflow-y: scroll;
    }

        .contents .listContents .more{
            margin-top: 0.7vw;
            align-self: flex-end;
            width: 3.4375vw;
            height: 1.5vw;
            font: normal normal bold 1.25vw/1.5vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            text-transform: uppercase;
            cursor: pointer;
        }

.pomodoro .bgOpen{
    top:0%;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    z-index: 10;
}
</style>
