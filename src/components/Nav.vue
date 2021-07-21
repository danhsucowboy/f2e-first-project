<template>
  <div class="option">
    <router-link to="/" class="item">
      <div class="nav-icon list"></div>
      <p class="nav-title">to-do list</p>
    </router-link>
    <router-link to="/analytics" class="item">
      <div class="nav-icon analytics"></div>
      <p class="nav-title">analytics</p>
    </router-link>
    <router-link to="/ringtones" class="item">
      <div class="nav-icon ringtones" :class="{selectedBgColor: isSelected === 3, unselectBgColor : isSelected !== 3}"></div>
      <p class="nav-title" :class="{selectedColor: isSelected === 3, unselectColor : isSelected !== 3}">ringtones</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import router from '../router';
import {Options, Vue} from 'vue-class-component';

export default class Nav extends Vue{

}
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
    margin-right: 0.625vw;
    background-color: #FFFFFF33;
}

.router-link-active .nav-icon{
    background-color: #FF4384 !important; 
}

.option .item:hover .nav-icon{
    background-color: #FF4384;
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
    font: normal normal bold 2.8125vw/2.8125vw 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0px;
    line-height: 3.28125vw;
    text-align: left;
    color: #FFFFFF33
}

.option .item:hover .nav-title{
    color: #FF4384;
}

.router-link-active .nav-title{
    color: #FF4384 !important;
}
</style>