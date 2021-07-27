<template>
  <div :class="{mainPanelOpen: pomodoroShow}" class="pomodoro">
    <div v-if="pomodoroShow" class="isolated count-ui">
        <div class="process-circle">
            <button class="play-pause-circle"></button>
            <button class="stop-circle"></button>
            <!-- <div class="bg"></div> -->
        </div>
    </div>
    <div class="interface">
      <div v-if="!pomodoroShow" class="count-ui">
        <div class="process-circle">
          <button class="side play-pause-circle"></button>
          <div class="bg"></div>
        </div>
      </div>
      <!-- <div class="timer">25:00</div> -->
      <Orologio v-if="!pomodoroShow"/>
      <div v-if="!pomodoroShow" class="mission">the First thing to do today</div>
    </div>
    <div :class="{bgOpen: pomodoroShow}" class="bg">
        <div v-if="pomodoroShow" class="contents">
            <AddMissionBar @add="addNewMission"/>
            <div class="currentItem">
                <div class="showMission">
                    <button class="missionBtn"  @click="missionChecked"></button>
                    <div class="itemProcess">
                        <div class="missionTitle">{{missionsToDO[0]}}</div>
                        <div class="smallCircle"></div>
                    </div>
                </div>
                <div class="timer">25:00</div>
            </div>
            <div class="listContents">
                <MissionItem v-for="(mission, index) in missionsToDO" :key="index" :itemProps="{panelOpen:false, folderTitle:'', content:mission, id:index, currentId:0}" @checked="getCheckedId"/>
                <button class="more">more</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue } from "vue-class-component";
import Orologio from '@/components/Orologio.vue';
import AddMissionBar from '@/components/AddMissionBar.vue';
import MissionItem from '@/components/MissionItem.vue';

@Options({
    components: {
        Orologio,
        AddMissionBar,
        MissionItem,
    },
    props: {
        pomodoroShow: Boolean,
        missionsToDO:{
            type: Array,
            default:[]
        },
    },
    emits: {
        missionChecked: Number
    }
})

export default class Pomodoro extends Vue {
    pomodoroShow!: boolean
    missionChecked!: number
    missionsToDO!: Array<string>
    currentItemId = 0

    getCheckedId(value: number){
        // this.outputId = value
        this.$emit('missionChecked', value)
    }
}
</script>

<style>
.isolated{
    position: absolute;
    top: 10.1563vw;
    left: 43.75vw;
    width: 42.1875vw;
    height: 42.1875vw;
    border: 4px solid #FF4384;
    border-radius: 50%;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .isolated .process-circle{
        width: 39.6875vw;
        height: 39.6875vw;
        background-color: #FF4384;
        border: 4px solid #FF4384;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .isolated .process-circle .play-pause-circle{
            margin-left: 0.9375vw;
            width: 7.5vw;
            height: 7.5vw;
            background-color: #fff;
        }

        .isolated .process-circle .stop-circle{
            margin-top: 5.5vw;
            width: 1.875vw;
            height: 1.875vw;
            background-color: #fff;
            mask: url('../assets/stop_black_48dp.svg') no-repeat center;
            padding:0;
            border:none;
            mask-size: 115% 115%;
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

.count-ui .process-circle .play-pause-circle{
    mask: url('../assets/play_circle_filled_black_48dp.svg') no-repeat center;
    padding:0;
    border:none;
    mask-size: 115% 115%;
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
    }
    
        .contents .currentItem .showMission{
            width: 100%;
            height: 3.75vw;
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

            }
            
                .showMission .itemProcess .missionTitle{
                    font: normal normal bold 1.875vw/2.1875vw 'Open Sans', sans-serif;
                    letter-spacing: 0px;
                    color: #003164;
                    text-transform: uppercase;
                    margin-bottom: 0.625vw;
                }

                .showMission .itemProcess .smallCircle{
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
        }

    .contents .listContents{
        margin-bottom: 3.75vw;
        display: flex;
        flex-direction: column;

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
        }

.pomodoro .bgOpen{
    top:0%;
    background: #FFEDF7 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    z-index: 0;
}
</style>
