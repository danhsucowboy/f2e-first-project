<template>
    <div class="timer">25:00</div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'

export default class Orologio extends Vue{

}
</script>

<style>
.timer{
    width: 13vw;
    height: 6vw;
    text-align: center;
    color: #FF4384;
    font: normal normal bold 5vw/6vw 'Open Sans', sans-serif;
}
</style>