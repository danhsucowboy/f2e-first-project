<template>
  <div class="menu">
    <button v-if="!btnActive" class="cancelBtn" @click="$emit('closeClick',true)">
      <div class="close"></div>
    </button>
  </div>
  <div class="title">Pomodoro</div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props:{
    btnActive: Boolean
  },
  emits: {
    closeClick: Boolean
  }
})

export default class Menu extends Vue{
  btnActive!: boolean
  closeClick!: boolean
}
</script>

<style>
.menu-wrapper .cancelBtn{
    position: relative;
    margin-top: 3.75vw;
    width: 3.75vw;
    height: 3.75vw;
    padding:0;
    border: none;
    background: none;
    cursor: pointer;
}

.menu-wrapper .cancelBtn .close{
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;
    width: 2.1875vw;
    height: 2.1875vw;
    background-color: #fff;
    mask: url('../assets/close_black_48dp.svg') no-repeat center;
    -webkit-mask: url('../assets/close_black_48dp.svg') no-repeat center;
}


.menu-wrapper .title{
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