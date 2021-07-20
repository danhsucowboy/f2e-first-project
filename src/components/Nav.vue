<template>
  <div class="option">
    <div class="item">
      <div class="nav-icon list"></div>
      <p class="nav-title">to-do list</p>
    </div>
    <div class="item">
      <div class="nav-icon analytics"></div>
      <p class="nav-title">analytics</p>
    </div>
    <div class="item">
      <div class="nav-icon ringtones"></div>
      <p class="nav-title">ringtones</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

export default class Nav extends Vue{}
</script>

<style>
.option{
    margin-top:3.5vw;
    height: 16.4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.option .item{
    display: flex;
}

.option .item .nav-icon{
    width: 3.28125vw;
    height: 3.28125vw;
    background-color: #FF4384;
    margin-right: 0.625vw;
}

.option .item .list{
    mask: url('../assets/list_black_48dp.svg') no-repeat center;
    mask-size: 2.8125vw 2.8125vw;
}

.option .item .analytics{
    mask: url('../assets/poll_black_48dp.svg') no-repeat center;
    mask-size: 2.8125vw 2.8125vw;
}

.option .item .ringtones{
    mask: url('../assets/library_music_black_48dp.svg') no-repeat center;
    mask-size: 2.8125vw 2.8125vw;
}

.option .item .nav-title{
    flex-grow: 1;
    height: 3.28125vw;
    color: #FF4384;
    font: normal normal bold 2.8125vw/2.8125vw 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0px;
    line-height: 3.28125vw;
    text-align: left;
}
</style>