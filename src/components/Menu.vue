<template>
  <div class="menu">
    <button class="cancelBtn">
      <div class="close"></div>
    </button>
  </div>
  <div class="title">Pomodoro</div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

export default class Menu extends Vue{}
</script>

<style>
.cancelBtn{
    position: relative;
    margin-top: 3.75vw;
    width: 3.75vw;
    height: 3.75vw;
    padding:0;
    border: none;
    background: none;
}

.cancelBtn .close{
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;
    width: 2.1875vw;
    height: 2.1875vw;
    background-color: #fff;
    mask: url('../assets/close_black_48dp.svg') no-repeat center;
    -webkit-mask: url('../assets/close_black_48dp.svg') no-repeat center;
}


.title{
    margin-bottom: 3.75vw;
    /* align-self: flex-end; */
    width: 2.42vw;
    height: 13vw;
    text-transform: uppercase;
    color: #fff;
    writing-mode: vertical-lr;
    font: normal normal bold 1.875vw/2.5vw 'Open Sans', sans-serif;
}
</style>