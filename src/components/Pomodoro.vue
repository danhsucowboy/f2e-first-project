<template>
  <div :class="{mainPanelOpen: pomodoroShow}" class="pomodoro">
    <div v-if="pomodoroShow" class="isolated count-ui">
        <section class="process-wrapper" :style="cssVars" :data-anim="setWrapperAnim">
            <section class="left circle" :data-anim="setLeftCircleAnim"></section>
            <section class="right circle" :data-anim="setRightCircleAnim"></section>
        </section>
        <div class="process-circle" 
            :class="{
                workBgColor: processMode === 0 || processMode === 2, 
                processBgColor: processMode === 1}">
            <button class="iconCircle" 
                :class="{
                    play: processMode === 0 || processMode === 2, 
                    pause: processMode === 1}" 
                @click="processPlay"></button>
            <button class="stop-circle" 
                :class="{
                    processBgColor: processMode === 0 || processMode === 2, 
                    workBgColor: processMode === 1}"
                @click="processStop"></button>
        </div>
    </div>
    <div class="interface">
      <div v-if="!pomodoroShow" class="bgPrimaryColor count-ui">
        <div class="process-circle">
          <button class="side iconCircle" 
            :class="{
                play: processMode === 0 || processMode === 2, 
                pause: processMode === 1}"></button>
          <div class="bg"></div>
        </div>
      </div>
      <!-- <div class="timer">25:00</div> -->
      <Orologio v-if="!pomodoroShow"/>
      <div v-if="!pomodoroShow" class="mission">{{missionsToDo.length > 0 ? getMission.contents : 'Clear'}}</div>
    </div>
    <div :class="{bgOpen: pomodoroShow}" class="bg">
        <div v-if="pomodoroShow" class="contents">
            <AddMissionBar @add="addNewMission"/>
            <div class="currentItem">
                <div class="showMission" v-if="missionsToDo.length > 0">
                    <button class="missionBtn"  @click="currentItemChecked"></button>
                    <div class="itemProcess">
                        <div class="missionTitle">{{getMission.contents}}</div>
                        <div class="processBoard">
                            <div class="smallCircle"></div>
                        </div>
                    </div>
                </div>
                <div class="timer">{{currentItemId > 0 ? showCountingTime : 'Clear'}}</div>
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
            oneMiniute: 59,
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
    oneMiniute!: number
    secTimer = {
        timerId: 0,
        start: 0,
        remaining: 1000
    }
    minTimer = {
        timerId: 0,
        start: 0,
        remaining: 60000
    }
    processingTime = 0


    get showCountingTime(): string{
        if(this.currentItemId > 0){
            if(this.processMode === 0){
                if(this.getMission.timeUnit <10)
                    return `0${this.getMission.timeUnit}:00`
                return this.getMission.timeUnit + ":00"
            }
            else{
                if(this.processingTime <10 && this.oneMiniute < 10)
                    return `0${this.processingTime}:0${this.oneMiniute}`
                else if(this.processingTime <10)
                    return `0${this.processingTime}:${this.oneMiniute}`
                else if(this.oneMiniute < 10)
                    return `${this.processingTime}:0${this.oneMiniute}`
                else
                    return `${this.processingTime}:${this.oneMiniute}`
            }
        }
        else
            return 'Clear'
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
        return {
            '--delay-time': this.delayTime+'s',
            '--right-during': this.rightDuration+'s',
            '--left-during': this.leftDuration+'s'
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

    countDownMiniute(inputSetting = 0){
        let delay:number = inputSetting === 0 ? 60000 : inputSetting
        if(this.getMission.timeUnit >= 1){
            this.minTimer.start = Date.now()
            clearTimeout(this.minTimer.timerId)
            this.minTimer.timerId = setTimeout(() => {
                this.getMission.timeUnit -= 1
                this.oneMiniute = 59
                this.countDownMiniute()
                this.countDownSecond()
            }, delay)
        }
    }

    countDownSecond(inputSetting = 0){
        let delay:number = inputSetting === 0 ? 1000 : inputSetting
        if(this.oneMiniute >= 1){
            this.secTimer.start = Date.now()
            clearTimeout(this.secTimer.timerId)
            this.secTimer.timerId = setTimeout(() => {
                this.oneMiniute -=1
                this.countDownSecond()
            }, delay)
        }
    }

    start(): void{
        this.processingTime = this.getMission.timeUnit
        let processSec: number = this.processingTime*60
        this.delayTime = processSec/2
        this.rightDuration = processSec/2
        this.leftDuration = processSec
        this.processingTime -= 1
        this.countDownMiniute()
        this.countDownSecond()
    }

    pause():void{
        clearTimeout(this.minTimer.timerId)
        clearTimeout(this.secTimer.timerId)
        this.minTimer.remaining -= Date.now() - this.minTimer.start
        this.secTimer.remaining -= Date.now() - this.secTimer.start
    }

    resume():void{
        this.countDownMiniute(this.minTimer.remaining)
        this.countDownSecond(this.secTimer.remaining)
    }

    processPlay(): void{
        switch(this.processMode){
            case 0:{
                this.start()
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

    processStop(): void{
        clearTimeout(this.minTimer.timerId)
        clearTimeout(this.secTimer.timerId)
        this.minTimer.remaining = 60000
        this.secTimer.remaining = 1000
        this.processMode = 0
        this.setWrapperAnim = ''
        this.setLeftCircleAnim = ''
        this.setRightCircleAnim = ''
        this.processingTime = 0
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
    border: 4px solid #FF4384;
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
            left: -0.5vw;
            width: 42.8125vw;
            height: 42.8125vw;
            border-radius: 50%;
            border-color: none;
            clip: rect(0vw, 42.8125vw, 42.8125vw, calc(42.8125vw/2));
            z-index: -1;
        }

        .isolated .process-wrapper .circle{
            position: absolute;
            top: -.156vw;
            left: 0vw;
            width: 42.8125vw;
            height: 42.8125vw;
            background-color: #FF4384;
            border-radius: 50%;
            clip: rect(0vw, 21.45vw, 42.8125vw, 0vw);
        }

        .isolated section[data-anim~=pause]{
            animation-play-state: paused;
        }

        .isolated section[data-anim~=base] {
            -webkit-animation-iteration-count: 1;  /* Only run once */
            -webkit-animation-fill-mode: forwards; /* Hold the last keyframe */
            -webkit-animation-timing-function:linear; /* Linear animation */
        }

        .process-wrapper[data-anim~=wrapper] {
            -webkit-animation-duration: 0.01s; /* Complete keyframes asap */
            -webkit-animation-delay: var(--delay-time); /* Wait half of the animation */
            -webkit-animation-name: close-wrapper; /* Keyframes name */
        }

        .circle[data-anim~=left] {
            -webkit-animation-duration: var(--left-during); /* Full animation time */
            -webkit-animation-name: left-spin;
        }

        .circle[data-anim~=right] {
            -webkit-animation-duration: var(--right-during); /* Half animation time */
            -webkit-animation-name: right-spin;
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
        /* background-color: #FF4384; */
        border: 4px solid #FF4384;
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

    /* .interface .count-ui .process-circle:hover{
        width: 10vw;
        height: 10vw;
    } */

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

.count-ui .process-circle .pause{
    mask: url('../assets/pause_circle_filled_black_48dp.svg') no-repeat center;
    padding:0;
    border:none;
    mask-size: 115% 115%;
    background-color: #FF4384;
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
    background: #FFEDF7 0% 0% no-repeat padding-box;
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

                    .itemProcess .processBoard .smallCircle{
                        width: 0.9375vw;
                        height: 0.9375vw;
                        border: 1px solid #FF4384;
                        border-radius: 50%;
                    }

        .contents .currentItem .timer{
            width: 100%;
            height: 16.1vw;
            text-align: center;
            font: normal normal bold 13.75vw/13.75vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FF4384;
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
            /* text-align: right; */
            font: normal normal bold 1.25vw/1.5vw 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FF4384;
            text-transform: uppercase;
            cursor: pointer;
        }

.pomodoro .bgOpen{
    top:0%;
    background: #FFEDF7 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    z-index: 10;
}
</style>
