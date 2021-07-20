<template>
  <div class="pomodoro">
    <div class="interface">
      <div class="count-ui">
        <div class="process-circle">
          <button class="play-circle"></button>
          <div class="bg"></div>
        </div>
      </div>
      <div class="timer">25:00</div>
      <div class="mission">the First thing to do today</div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script lang="ts">
import {Options, Vue } from "vue-class-component";

export default class Pomodoro extends Vue {}
</script>

<style>
.pomodoro{
    width: 27.34vw;
    height: 18.2vw;
    position: absolute;
    top: 44.3vw;
    left: 6.64vw;
    overflow:hidden;
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
    background-color: #003164;
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

.pomodoro .interface .timer{
    width: 13vw;
    height: 6vw;
    text-align: center;
    color: #FF4384;
    font: normal normal bold 5vw/6vw 'Open Sans', sans-serif;
}

.pomodoro .interface .mission{
    height: 1.5vw;
    text-align: left;
    letter-spacing: 0px;
    color: #003164;
    font: normal normal bold 1.25vw/1.5vw 'Open Sans', sans-serif;
    text-transform: uppercase;
}

.count-ui .process-circle .play-circle{
    position: absolute;
    top: 0.3125vw;
    left: 0.3125vw;
    z-index: 10;
    width: 7.5vw;
    height: 7.5vw;
    background-color: #FF4384;
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
}
</style>
